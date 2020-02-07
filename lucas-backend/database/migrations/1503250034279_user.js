'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments()
      table.enu('tag', ['student', 'parent', 'admin']).notNullable()
      table
        .integer('admin_id')
        .unsigned()
        .references('id')
        .inTable('admins')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('parents_id')
        .unsigned()
        .references('id')
        .inTable('parents')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('students_id')
        .unsigned()
        .references('id')
        .inTable('students')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name', 80).notNullable()
      table.string('email', 254).unique()
      table.string('password', 60).notNullable()
      table.string('token')
      table.timestamp('token_created_at')
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
