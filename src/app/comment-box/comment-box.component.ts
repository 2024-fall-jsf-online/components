import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent {
  comment: string = '';
  comments: string[] = [];

  addComment() {
    if (this.comment.trim()) {
      this.comments.push(this.comment);
      this.comment = ''; // Clear the input after adding the comment
    }
  }
}

