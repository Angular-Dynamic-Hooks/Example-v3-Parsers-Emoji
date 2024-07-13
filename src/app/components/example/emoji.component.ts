import { Component, Input } from '@angular/core';

/**
 * Displays inline emojis
 *
 * Note: The emojis for this example are a variation of Ashish Bardhan's Facebook emojis:
 * https://codepen.io/AshBardhan/pen/dNKwXz
 */
@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss'],
  standalone: true
})
export class EmojiComponent {
  @Input() type: string = '';
}
