<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import Decimal from "decimal.js";

const title = ref('Welcome to my SSR App!');
const description = ref('This is a server-side rendered app using Nuxt.js and Vue.js.');


const rate = new Decimal(773.33);
const quantity = new Decimal(2500);
const subTotal = rate.times(quantity);
const discount = subTotal.times(0.1);
const total = subTotal.minus(discount);
const vat = total.times(0.13);
const grandTotal = total.plus(vat);


const rate1 = 773.33;
const quantity1 = 2500;
const subTotal1 = rate1*(quantity1);
const discount1 = subTotal1*(0.1);
const total1 = subTotal1-(discount1);
const vat1 = total1*(0.13);
const grandTotal1 = total1+(vat1);
//
// const rate1 = new Decimal(555555555);
// const quantity1 = new Decimal(25789);
// const subTotal1 = rate1.times(quantity1).toDecimalPlaces(2);
// const discount1 = subTotal1.times(0.037).toDecimalPlaces(2);
// const total1 = subTotal1.minus(discount1).toDecimalPlaces(2);
// const vat1 = total1.times(0.13).toDecimalPlaces(2);
// const grandTotal1 = total1.plus(vat1).toDecimalPlaces(2);
//
// const rate2 = new Decimal(555555555);
// const quantity2 = new Decimal(25789);
// const subTotal2 = Decimal.mul(rate2,quantity2).toDecimalPlaces(2);
// const discount2 = Decimal.mul(0.037, subTotal2).toDecimalPlaces(2);
// const total2 = Decimal.sub(subTotal2, discount2).toDecimalPlaces(2);
// const vat2 = Decimal.mul(0.13, total2).toDecimalPlaces(2);
// const grandTotal2 = Decimal.add(total2,vat2).toDecimalPlaces(2);

console.log('----------------------------------')
console.log('rate = ',rate.toString())
console.log('quantity = ',quantity.toString())
console.log('subTotal = ',subTotal.toString())
console.log('discount = ',discount.toString())
console.log('total = ',total.toString())
console.log('vat = ',vat.toString())
console.log('grandTotal = ',grandTotal.toString())

console.log('----------------------------------')
console.log('rate = ', rate1.toString());
console.log('quantity = ', quantity1.toString());
console.log('subTotal = ', subTotal1.toString());
console.log('discount = ', discount1.toString());
console.log('total = ', total1.toString());
console.log('vat = ', vat1.toString());
console.log('grandTotal = ', grandTotal1.toString());
//
// console.log('----------------------------------')
// console.log('rate = ',rate2.toString())
// console.log('quantity = ',quantity2.toString())
// console.log('subTotal = ',subTotal2.toString())
// console.log('discount = ',discount2.toString())
// console.log('total = ',total2.toString())
// console.log('vat = ',vat2.toString())
// console.log('grandTotal = ',grandTotal2.toString())

</script>

<style scoped>
h1 {
  font-size: 2em;
}
</style>
