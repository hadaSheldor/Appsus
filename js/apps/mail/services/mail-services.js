import emailsData from '../data/mails.json' assert { type: 'json' }
import { storageService } from '../../../services/async-storage-service.js'
import { utilService } from '../../../services/util.js'

const EMAILS_KEY = 'emailsDB'
_createMails()

export const emailService = {
  query,
  remove,
  get,
}

function query() {
  return storageService.query(EMAILS_KEY)
}

function remove(mailId) {
  return storageService.remove(EMAILS_KEY, mailId)
}

function get(mailId) {
  return storageService.get(EMAILS_KEY, mailId)
}

function _createMails() {
  let emails = utilService.loadFromStorage(EMAILS_KEY)
  if (!emails || !emails.length) {
    emails = emailsData
    utilService.saveToStorage(EMAILS_KEY, emails)
  }
  return emails
}
