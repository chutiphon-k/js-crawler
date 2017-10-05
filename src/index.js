import fs from 'fs'
import shell from 'shelljs';
import url from 'url'
import axios from 'axios'
import cheerio from 'cheerio'
import fse from 'fs-extra'
import robotto from 'robotto'
import { uniq } from 'lodash'

import { hasRobotsTxt, writeContent, getUrl } from './helpers'

let q = ['https://std.regis.ku.ac.th'], q_visited = [], listRobotsTxt = []
const LIMIT = 100, TIMEOUT = 1000, USERAGENT = 'bot', DELAY = 100

const checkUrl = async (oldUrl) => {
	if(q.length === 0 || q_visited.length === LIMIT) {
		fs.writeFileSync('listRobotsTxt.json', JSON.stringify(uniq(listRobotsTxt), null, 2), 'utf8')
		console.log('---END---')
		return
	}
	new Promise(async (resolve, reject) => {
		if (oldUrl) {
			let position = await q.findIndex(data => data.indexOf(url.parse(oldUrl).host) === -1)
			let currentUrl = (q.splice(position, 1))[0]
			setTimeout(() => {
				resolve(currentUrl)
			}, DELAY);
		} else {
			resolve(q.shift())
		}
	}).then( currentUrl => {
		hasRobotsTxt(currentUrl).then( has => has && listRobotsTxt.push(url.parse(currentUrl).host))
		robotto.canCrawl(USERAGENT, currentUrl, (err, isAllowed) => {
			if (isAllowed || err) {
				main(currentUrl)
			} else {
				checkUrl()
			}
		});
	})
}

const main = async (currentUrl)  => {
	try {
		const res = await axios.get(currentUrl, { timeout: TIMEOUT, headers: { 'User-Agent': USERAGENT } })
		console.log('====================================');
		console.log(`${q_visited.length + 1} : `, currentUrl)
		q_visited.push(currentUrl)
		let urls = getUrl(currentUrl, res.data, [...q, ...q_visited]);
		await writeContent(currentUrl, res.data)
		q.push(...urls)
		console.log('====================================');
		checkUrl(currentUrl)
	} catch (error) {
		checkUrl(currentUrl)
	}
}

if (fs.existsSync('html')) fse.removeSync('html')
if (fs.existsSync('listRobotsTxt.json')) fse.removeSync('listRobotsTxt.json')
checkUrl()

