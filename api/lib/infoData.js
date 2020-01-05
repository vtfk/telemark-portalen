const filterRoles = require('./filter-roles')
const filterShortcuts = require('./filter-shortcuts')

async function getRoles(company) {
  return filterRoles({ company })
}

async function getShortcuts(roles = [], ip) {
  return filterShortcuts({ roles, ip })
}

module.exports = {
  getRoles,
  getShortcuts
}
