const axios = require('axios')

async function getRoles(company) {
  const { data } = await axios.get(
    `https://roles.portalen.win/roles${company ? `?company=${company}` : ''}`
  )
  return data
}

async function getShortcuts(roles = [], ip) {
  const { data } = await axios.get(
    `https://shortcuts.portalen.win/shortcuts?roles=${roles.join('|')}${
      ip ? `&myIp=${ip}` : ''
    }`
  )
  return data
}

module.exports = {
  getRoles,
  getShortcuts
}
