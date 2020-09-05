import {typeTitle, typeTask} from '@entity/task'

/**
 * Done
 * @done @type {boolean} todoが完了したかどうか
 */
type typeDone = {
  done?: boolean
}

/**
 * Description
 * @memo @type {string} todo メモ
 * @date @type {string | null} todo 日付
 */
type typeDescription = {
  memo: string
  date: string | null
}

/**
 * Todo Edit Form
 * @name  @type {'title'|'memo'|'date'} input name
 * @ref   @type {any} ref
 * @error @type {string|null} error message
 */
export type typeTodoForm = {
  name:   'title' | 'memo' | 'date'
  ref?:   any
  error?: string
}

/**
 * Todo Object
 * @id    @type {number} ID
 * @title @type {string} タイトル
 * @done  @type {typeDone} todoが完了したかどうか
 * @memo  @type {typeDescription} todo メモ
 * @date  @type {typeDescription} todo 日付
 */
export type typeTodo = typeTask & typeDone & typeDescription

/**
 * Redux Todo State
 * @todoList @type {typeTodo[]} Todo
 */
export type typeTodoState = {
  todoList: typeTodo[]
}

/**
 * Show Todo Select Option
 * @type {string} セレクトメニュー
 */
export type typeTodoOption = string

/**
 * Todo Select
 * @done  @type {typeDone} todoが完了したかどうか
 * @option @type {typeTodoOption} セレクトメニュー
 */
export type TodoSelectItem = Done & {
  option: TodoOption
}

/**
 * Todo 表示切替イベント
 */
export type typeTodoSelectEvent = (choice: TodoOption) => void