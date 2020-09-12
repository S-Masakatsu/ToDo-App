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
  date: string
}

/**
 * Modal Form Open
 * @type {(date?: dayjs.Dayjs | null) => void}
 */
export type typeFormOpen = (date?: dayjs.Dayjs | null) => void

/**
 * Todo Edit Form Item
 * @name         @type {'title'|'memo'|'date'} input name
 * @ref          @type {any|undefined} ref
 * @error        @type {string|undefined} error message
 * @defaultValue @type {string|undefined} defaultValue
 */
export type typeTodoFormItem = {
  name:   'title' | 'memo' | 'date'
  ref?:   any
  error?: string
  defaultValue?: string
}

/**
 * Todo Edit Form
 * @title       @type {typeTodoFormItem} タイトル
 * @description @type {typeTodoFormItem} メモ
 * @date        @type {typeTodoFormItem} 日付
 */
export type typeTodoForm = {
  title:       typeTodoFormItem
  description: typeTodoFormItem
  date:        typeTodoFormItem
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