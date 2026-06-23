import type { StudyRecord } from '../types/studyRecord'
import './StudyList.css'

// props の型を定義（親から records を受け取る）
type StudyListProps = {
  records: StudyRecord[]
}

// 日付を "2026-06-20" → "2026/06/20" の形式に変換する
function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-')
  return `${year}/${month}/${day}`
}

function StudyList({ records }: StudyListProps) {
  // 記録が0件のときは、一覧の代わりに案内メッセージを表示
  if (records.length === 0) {
    return (
      <section className="study-list-section">
        <h2>学習記録一覧</h2>
        <p className="empty-message">まだ学習記録がありません。上のフォームから登録してください。</p>
      </section>
    )
  }

  return (
    <section className="study-list-section">
      <h2>学習記録一覧</h2>

      {/* map: 配列の各要素を1件ずつ JSX に変換して表示する */}
      <ul className="study-list">
        {records.map((record) => (
          // key: React が各要素を区別するための一意な値（必須）
          <li key={record.id} className="study-list-item">
            {/* 学習日 */}
            <p className="record-date">{formatDate(record.date)}</p>

            {/* カテゴリ + 学習時間（例: React学習 2時間） */}
            <p className="record-summary">
              {record.category}学習 {record.hours}時間
            </p>

            {/* 学習内容 */}
            <p className="record-title">{record.title}</p>

            {/* メモは任意項目なので、あるときだけ表示 */}
            {record.memo && <p className="record-memo">{record.memo}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default StudyList
