import emailsData from '../data/emails.json' assert { type: 'json' }
import { storageService } from '../../../services/async-storage-service.js'
import { utilService } from '../../../services/util.js'

const EMAILS_KEY = 'emailsDB'
const user = { email: 'miss@appsus.com' }

_createMails()

export const emailService = {
  query,
  remove,
  get,
  toggleMarked,
  moveToBin,
  toggleRead,
  getByFolder,
  getUnread,
}

function query() {
  return storageService.query(EMAILS_KEY)
}

function get(emailId) {
  return storageService.get(EMAILS_KEY, emailId).then((emails) => {
    return emails.sort((e1, e2) => e2.sentAt - e1.sentAt)
  })
}

function getByFolder(folder) {
  if (folder === 'inbox') {
    return query().then((emails) => {
      return emails.filter(
        (email) => email.to === user.email && email.isDelete === false
      )
    })
  } else if (folder === 'sent') {
    return query().then((emails) => {
      return emails.filter(
        (email) => email.from === user.email && email.isDelete === false
      )
    })
  } else if (folder === 'starred')
    return query().then((emails) => {
      return emails.filter(
        (email) => email.isMarked === true && email.isDelete === false
      )
    })
  else if (folder === 'bin')
    return query().then((emails) => {
      return emails.filter(
        (email) => email.isDelete === true && email.folder === 'bin'
      )
    })
}

function getUnread() {
  return query().then((emails) => {
    return emails.filter((email) => email.isRead === false)
  })
}

function toggleMarked(email) {
  email.isMarked = !email.isMarked
  return storageService.put(EMAILS_KEY, email)
}

function toggleRead(email) {
  email.isRead = !email.isRead
  return storageService.put(EMAILS_KEY, email)
}

function moveToBin(email) {
  // const idx = emailsData.findIndex((email) => email.id === emailId)
  // const e = emailsData[idx]
  email.folder = 'bin'
  email.isDelete = true
  return storageService.put(EMAILS_KEY, email)
  // const idx = emailsData.findIndex((email) => email.id === emailId)
  // const e = emailsData[idx]
  // e.folder = 'bin'
  // e.isDelete = true
  // return storageService.put(EMAILS_KEY, e)
}

function remove(emailId) {
  return storageService.remove(EMAILS_KEY, emailId)
}

function _createMails() {
  let emails = utilService.loadFromStorage(EMAILS_KEY)
  if (!emails || !emails.length) {
    emails = emailsData
    utilService.saveToStorage(EMAILS_KEY, emails)
  }
  return emails
}
