import {TodoSelectItem} from '@entity/todo'

export enum TODO_LABELS {
  TITLE =       'タイトル',
  DESCRIPTION = '説明',
  DATE =        '日時',
}

export const TODO_OPTIONS = [
  '未完了のToDo',
  '完了済のToDo',
  'すべてのToDo',
]

export const TODO_SELECTS: TodoSelectItem[] = [
  {option: TODO_OPTIONS[0], done: false},
  {option: TODO_OPTIONS[1], done: true},
  {option: TODO_OPTIONS[2]}
]