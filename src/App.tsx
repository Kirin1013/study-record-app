import { useState } from 'react'
import StudyForm from './components/StudyForm'
import StudyList from './components/StudyList'
import type { StudyFormData, StudyRecord } from './types/studyRecord'
import './App.css'

function App() {
  // 学習記録の一覧を state で管理する
  // StudyRecord[] = StudyRecord 型の配列
  const [records, setRecords] = useState<StudyRecord[]>([])

  // フォームから新しい記録を受け取って、一覧に追加する関数
  const handleAddRecord = (formData: StudyFormData) => {
    const newRecord: StudyRecord = {
      id: crypto.randomUUID(), // 各記録を区別するための一意な ID
      date: formData.date,
      category: formData.category,
      title: formData.title,
      hours: Number(formData.hours), // 文字列 → 数値に変換
      memo: formData.memo || undefined, // 空文字の場合は undefined（省略）
      createdAt: new Date().toISOString(), // 登録した日時
    }

    // 既存の records に新しい記録を先頭に追加
    // prev = 今の records、スプレッド構文で配列をコピーして追加
    setRecords((prev) => [newRecord, ...prev])
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>学習記録アプリ</h1>
        <p>日々の学習内容を記録し、学習時間や継続状況を可視化します。</p>
      </header>

      {/* フォームに「追加処理」を渡す（親 → 子 へのデータの流れ） */}
      <StudyForm onAddRecord={handleAddRecord} />

      {/* 一覧に records を渡す（親 → 子 へのデータの流れ） */}
      <StudyList records={records} />
    </main>
  )
}

export default App
