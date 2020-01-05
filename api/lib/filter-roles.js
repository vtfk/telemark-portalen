const mapRoles = require('./map-roles')
const generateId = require('./generate-id')

module.exports = data => {
  const { company, department } = data
  let roles = data.roles || []

  roles = Array.isArray(roles) ? roles : roles.split('|')

  if (company) {
    roles.push(generateId(company))
    // Fallback if skole
    if (company.includes(' skole') || company.includes(' skule')) {
      roles.push('skole')
    }
    // Fallback if tannhelse
    if (company.includes(' tannklinikk')) {
      roles.push('tannhelse')
    }
  }

  if (department) {
    roles.push(generateId(department))
  }

  // Fallback if none = alle
  roles.push('alle')

  return mapRoles(roles)
}
