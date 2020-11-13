import { FormControl } from '@angular/forms';

export function restrictedWords(words: string[]) {
  return function (control: FormControl): { [key: string]: any; } {
    if (!words) {
      return null;
    }

    const invalidWords = words.map(word => control.value
      .includes(word) ? word : null)
      .filter(word => word != null);

    return invalidWords && invalidWords.length >= 1
      ? { 'restrictedWords': invalidWords.join(', ') }
      : null;
  };
}
