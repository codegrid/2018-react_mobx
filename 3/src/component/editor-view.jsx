import React from 'react';
import { observable, toJS } from 'mobx';
import { observer } from 'mobx-react';

class EditorView extends React.Component {
  constructor(props) {
    super(props);

    this._setDraftFromProps(props.editMemo);
    this.getDraftData = () => toJS(this.draft);
  }

  render() {
    const {
      id,
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
        {id !== '' && (
          <div>
            <label>id：</label>
            <input
              type="text"
              value={id}
              disabled
            />
          </div>
        )}
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

  componentWillReact() {
    if (!this.props.editMemo) {
      return;
    }

    if (this.props.editMemo.id !== this.draft.id) {
      this._setDraftFromProps(this.props.editMemo);
    }
  }

  _setDraftFromProps(editMemo) {
    const initDraft = editMemo ? toJS(editMemo) : {
      id: '',
      text: '',
      date: '',
      tags: [],
    };
    this.draft = observable(initDraft);
  }
}

export default observer(EditorView);
