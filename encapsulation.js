const AccountNum = class {
  #accNum;
  constructor(name, address, pincode, accnum) {
    this.name = name;
    this.address = address;
    this.pincode = pincode;
    this.#accNum = accnum;
  }
  #getNum(number) {
    return number;
  }
  getAccDetails() {
    console.log(
      `${this.name} from Add:{${this.address}}, Pincode:{${
        this.pincode
      }} has Account No: {${this.#getNum(this.#accNum)}}`
    );
  }
};
const Num = new AccountNum("Shivangi", "ABC", "12345", 8085);
console.log(Num);
// Num.#getNum();
Num.getAccDetails();
