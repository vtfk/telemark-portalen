const axios = require('axios')
const filterShortcuts = require('./filter-shortcuts')

async function getRoles(company) {
  const { data } = await axios.get(
    `https://roles.portalen.win/roles${company ? `?company=${company}` : ''}`
  )
  return data
}

async function getShortcuts(roles = [], ip) {
  return filterShortcuts({ roles, ip })
}

module.exports = {
  getRoles,
  getShortcuts
}
