import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  @Input() config!: comment;
  public selectedEmojis: any[] = [];
  public chooseEmoji: boolean = false;

  public handleChooseEmoji(){
    this.chooseEmoji = true;
  }

  public onEmojiSelect(event: any) {
    this.selectedEmojis.push(event.emoji.native)
    this.chooseEmoji = false
  }
}

type comment= {
  user_name: string,
  user_img: string,
  published: string,
  text: string,
  reacts?: string[]
}

