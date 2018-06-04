import React from 'react';
import { observable, toJS } from 'mobx';
import { observer } from 'mobx-react';

class EditorView extends React.Component {
  constructor(props) {
    super(props);

    this.draft = observable({
      text: '',
      date: '',
      tags: [],
    });
    this.getDraftData = () => toJS(this.draft);
  }

  render() {
    const {
      text,
      date,
      tags,
    } = this.draft;
    const {
      onClickSave,
      onClickCancel,
    } = this.props;

    return (
      <div className="editor-view">
        <div>
          <label>内容：</label>
          <input
            type="text"
            placeholder="メモのタイトル"
            value={text}
            onChange={ev => this.draft.text = ev.target.value}
          />
        </div>
        <div>
          <label>日付：</label>
          <input
            type="date"
            value={date}
            onChange={ev => this.draft.date = ev.target.value}
          />
        </div>
        <div>
          <label>タグ：</label>
          <input
            type="text"
            placeholder="空白区切りで指定"
            value={tags.join(' ')}
            onChange={ev => this.draft.tags = ev.target.value ? ev.target.value.split(' ') : []}
          />
        </div>
        <div>
          <button onClick={() => onClickCancel()}>戻る</button>
          <button onClick={() => onClickSave(this.getDraftData())}>保存</button>
        </div>
      </div>
    );
  }
}

export default observer(EditorView);
