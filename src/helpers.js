import fs from 'fs'
import shell from 'shelljs'
import url from 'url'
import axios from 'axios'
import robotto from 'robotto'
import cheerio from 'cheerio'

const USERAGENT = 'bot', TIMEOUT = 1000

export const writeContent = (urlPath, content) => {
	const handleUrl = url.parse(urlPath)
	let directory
	if(handleUrl.path === '/') {
		directory = `html/${handleUrl.host}`;
	} else {
		directory = `html/${handleUrl.host}${handleUrl.path}`;
	}
	const rootDirectory = directory.split('/').slice(0, -1).join('/')
	if (!fs.existsSync(rootDirectory)) {
		shell.mkdir('-p', rootDirectory);
	}
	fs.writeFileSync(directory, content, 'utf8')
}

export const hasRobotsTxt = async (urlPath) => {
	const robotsUrl = robotto.getRobotsUrl(urlPath)
	try {
		const res = await axios.get(robotsUrl, { maxRedirects: 0, timeout: TIMEOUT, headers: { 'User-Agent': USERAGENT } })
		return true
	} catch (error) {
		return false
	}
}

export const getUrl = (currentUrl, content, listUrl) => {
	const regx = /.(html|htm)/g
	const handleCurrentUrl = url.parse(currentUrl)
	const { protocol, host, path } = handleCurrentUrl
	const $ = cheerio.load(content)
	let urls = $('a').map((i, el) => {
		let link = $(el).attr('href')
		if (url.parse(link).protocol) {
			return link
		}
		if (link.charAt(0) === '/') {
			return `${protocol}//${host}${link}`
		} else {
			return `${protocol}//${host}${path.split('/').slice(0, -1).join('/')}/${link}`
		}
	}).get();
	urls = urls.filter(data => regx.test(data) && !listUrl.includes(data))
	return urls
}
