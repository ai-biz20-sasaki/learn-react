import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <a
        className=""
        href="https://react.dev/learn/describing-the-ui"
        target="_blank"
        rel="noopener noreferrer"
      >
        React公式 Learn React
      </a>
      <p>に記載されているコードを実践してみる</p>

      <p>Describing the UI:UIの説明</p>
      <ul>
        <li>Your First Component|最初のコンポーネント</li>
        <li>Importing and Exporting Components|コンポーネントのインポートとエクスポート</li>
        <li>Writing Markup with JSX|JSXでマークアップを書く</li>
        <li>
          <Link href="/describing-the-ui/js-in-jsx-with-curly-braces">
            JavaScript in JSX with Curly Braces|中括弧を使用した JSX の JavaScript
          </Link>
        </li>
        <li>
          <Link href="/describing-the-ui/passing-props-to-a-component">
            Passing Props to a Component|プロパティをコンポーネントに渡す
          </Link>
        </li>
        <li>Conditional Rendering|条件付きレンダリング</li>
        <li>Rendering Lists|レンダリングリスト</li>
        <li>
          <Link href="/describing-the-ui/keeping-components-pure">
            Keeping Components Pure|コンポーネントを純粋に保つ
          </Link>
        </li>
      </ul>

      <p>Adding Interactivity|インタラクティブ性の追加</p>
      <ul>
        <li>
          <Link href="/adding-interactivity/responding-to-events">
            Responding to Events|イベントへの応答
          </Link>
        </li>
        <li>
          <Link href="/adding-interactivity/state-a-components-memory">
            State: A Component's Memory|状態: コンポーネントのメモリ
          </Link>
        </li>
        <li>Render and Commit|レンダリングとコミット</li>
        <li>State as a Snapshot|スナップショットとしての状態</li>
        <li>Queueing a Series of State Updates|一連の状態更新をキューに入れる</li>
        <li>Updating Objects in State|状態内のオブジェクトの更新</li>
        <li>Updating Arrays in State|状態の配列を更新する</li>
      </ul>

      <p>Managing State|状態の管理</p>
      <ul>
        <li>Reacting to Input with State|状態による入力への反応</li>
        <li>Choosing the State Structure|状態構造の選択</li>
        <li>Sharing State Between Components|コンポーネント間での状態の共有</li>
        <li>Preserving and Resetting State|状態の保存とリセット</li>
        <li>Extracting State Logic into a Reducer|状態ロジックを Reducer に抽出する</li>
        <li>Passing Data Deeply with Context|コンテキストに応じてデータを深く渡す</li>
        <li>Scaling Up with Reducer and Context|Reducer と Context によるスケールアップ</li>
      </ul>

      <p>Escape Hatches|避難ハッチ</p>
      <ul>
        <li>Referencing Values with Refs|Ref を使用した値の参照</li>
        <li>Manipulating the DOM with Refs|Ref を使用した DOM の操作</li>
        <li>Synchronizing with Effects|エフェクトとの同期</li>
        <li>You Might Not Need an Effect|エフェクトは必要ないかもしれません</li>
        <li>Lifecycle of Reactive Effects|リアクティブ効果のライフサイクル</li>
        <li>Separating Events from Effects|イベントとエフェクトを分離する</li>
        <li>Removing Effect Dependencies|エフェクトの依存関係の削除</li>
        <li>Reusing Logic with Custom Hooks|カスタムフックを使用したロジックの再利用</li>
      </ul>

    </div>
  )
}