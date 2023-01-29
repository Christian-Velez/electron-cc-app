import { Call } from '/@/types/Call'

export class CallNode {
   private value: Call
   private next: CallNode | null

   constructor(value: Call) {
      this.value = value
      this.next = null
   }

   public getValue() {
      return this.value
   }

   public getNext() {
      return this.next
   }

   public setValue(value: Call) {
      this.value = value
   }

   public setNext(next: CallNode | null) {
      this.next = next
   }
}