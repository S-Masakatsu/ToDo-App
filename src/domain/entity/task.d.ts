/**
 * typeTitle
 * @type {string} Todo Title
 */
export type typeTitle = string


/**
 * typeTask
 * @id    @type {number} todo ID
 * @title @type {typeTitle} todo Title
 */
export type typeTask = {
  id:    number,  // ID
  title: typeTitle
}