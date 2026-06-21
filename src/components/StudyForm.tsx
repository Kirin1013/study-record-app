import { useState, type FormEvent } from 'react'
import {
  STUDY_CATEGORIES,
  type StudyCategory,
  type StudyFormData,
} from '../types/studyRecord'
import './StudyForm.css'

function getTodayString(): string {
  return new Date().toISOString().split('T')[0]
}

const initialFormData: StudyFormData = {
  date: getTodayString(),
  category: 'React',
  title: '',
  hours: '',
  memo: '',
}

function StudyForm() {
  const [form, setForm] = useState<StudyFormData>(initialFormData)

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target
    setForm((prev) => ({
      ...prev,
      [name]: name === 'category' ? (value as StudyCategory) : value,
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // STEP3 で一覧表示・保存処理を追加する
    console.log('入力内容:', form)
  }

  return (
    <section className="study-form-section">
      <h2>学習記録を登録</h2>
      <form className="study-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="date">学習日</label>
          <input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="category">学習カテゴリ</label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            {STUDY_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="title">学習内容</label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            placeholder="例: useStateについて学習"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="hours">学習時間（時間）</label>
          <input
            id="hours"
            name="hours"
            type="number"
            min="0.5"
            step="0.5"
            value={form.hours}
            onChange={handleChange}
            placeholder="例: 2"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="memo">メモ（任意）</label>
          <textarea
            id="memo"
            name="memo"
            value={form.memo}
            onChange={handleChange}
            placeholder="気づいたことや次にやることをメモ"
            rows={3}
          />
        </div>

        <button type="submit" className="submit-button">
          登録する
        </button>
      </form>
    </section>
  )
}

export default StudyForm
