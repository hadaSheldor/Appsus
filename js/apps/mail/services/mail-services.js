import emailsData from '../data/mails.json' assert { type: 'json' }
import { utilService } from './services/util.js'

const EMAILS_KEY = 'emailsDB'
_createMails()

function _createMails() {
  let emails = utilService.loadFromStorage(EMAILS_KEY)
  if (!emails || !emails.length) {
    emails = emailsData
    utilService.saveToStorage(EMAILS_KEY, emails)
  }
  return emails
}
