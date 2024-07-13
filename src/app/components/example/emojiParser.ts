import { Injectable } from '@angular/core';
import { HookParser, HookValue, HookComponentData, HookBindings, HookFinder, HookPosition } from 'ngx-dynamic-hooks';
import { EmojiComponent } from './emoji.component';

@Injectable({ 
  providedIn: 'root' 
})
export class EmojiParser implements HookParser {

  constructor(private hookFinder: HookFinder) {}

  public findHooks(content: string, context: any): HookPosition[] {
    // As an example, this regex finds the emoticons :-D, :-O and :-*
    const emoticonRegex = /(?::-D|:-O|:-\*)/gm;

    // We can use the HookFinder service provided by the library to easily
    // find the HookPositions of any regex in the content string
    return this.hookFinder.findSingletagHooks(content, emoticonRegex);
  }

  public loadComponent(hookId: number, hookValue: HookValue, context: any, childNodes: Array<Element>): HookComponentData {
    return {
      component: EmojiComponent
    };
  }

  public getBindings(hookId: number, hookValue: HookValue, context: any): HookBindings {
    // Lets see what kind of emoticon this hook is and assign a fitting emoji
    let emojiType: string;
    switch (hookValue.openingTag) {
      case ':-D': emojiType = 'laugh'; break;
      case ':-O': emojiType = 'wow'; break;
      case ':-*': emojiType = 'love'; break;
    }

    // Set the 'type'-input in the EmojiComponent correspondingly
    return {
      inputs: {
        type: emojiType!
      }
    };
  }
}