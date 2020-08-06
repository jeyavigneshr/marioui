export class Feedback {
  private _age: String;
  private _gender: String;
  private _original_enjoyment: String;
  private _original_difficulty: String;
  private _original_playability: String;
  private _generated_enjoyment: String;
  private _generated_difficulty: String;
  private _generated_playability: String;
  private _play_again: String;

  get age(): String {
    return this._age;
  }

  set age(value: String) {
    this._age = value;
  }

  get gender(): String {
    return this._gender;
  }

  set gender(value: String) {
    this._gender = value;
  }

  get original_enjoyment(): String {
    return this._original_enjoyment;
  }

  set original_enjoyment(value: String) {
    this._original_enjoyment = value;
  }

  get original_difficulty(): String {
    return this._original_difficulty;
  }

  set original_difficulty(value: String) {
    this._original_difficulty = value;
  }

  get original_playability(): String {
    return this._original_playability;
  }

  set original_playability(value: String) {
    this._original_playability = value;
  }

  get generated_enjoyment(): String {
    return this._generated_enjoyment;
  }

  set generated_enjoyment(value: String) {
    this._generated_enjoyment = value;
  }

  get generated_difficulty(): String {
    return this._generated_difficulty;
  }

  set generated_difficulty(value: String) {
    this._generated_difficulty = value;
  }

  get generated_playability(): String {
    return this._generated_playability;
  }

  set generated_playability(value: String) {
    this._generated_playability = value;
  }

  get play_again(): String {
    return this._play_again;
  }

  set play_again(value: String) {
    this._play_again = value;
  }
}
