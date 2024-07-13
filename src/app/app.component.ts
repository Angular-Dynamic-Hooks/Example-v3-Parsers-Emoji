import { Component } from '@angular/core';
import { DynamicHooksComponent } from 'ngx-dynamic-hooks';
import { EmojiParser } from './components/example/emojiParser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DynamicHooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  parsers = [EmojiParser];
  content = `
    <p>Lets load a laughing emoji here: :-D</p>
    <p>This seems to work pretty well :-O</p>
    <p>The <b>EmojiComponents</b> are set to be inline in this example, but you could make them block-styled as well.</p>
    <p>Certainly looks a lot more lively than standard smileys :-*</p>
  `;
}