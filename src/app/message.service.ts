import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  //  declaring an empty array of strings which represent messages
  messages: string[] = [];

  //  function 'add's a message to cache
  add(message: string) {
    this.messages.push(message);
  }

  //  function 'clear's the cache of messages
  clear() {
    this.messages = [];
  }
}