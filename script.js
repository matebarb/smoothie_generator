// Arrays with items for randomly generated message
const flavours = ['strawberry', 'raspberry', 'blueberry', 'blackberry', 'mango', 'papaya', 'pineapple', 'avocado', 'peach', 'apricot', 'banana', 'green apple']
const addOns = ['cocoa nibs', 'coconut shavings', 'peanut butter', 'chia seeds', 'matcha', 'macadamia nuts', 'madagascar vanilla', 'pistachio', 'spirulina', 'acacia honey', 'fresh ginger', 'medjool dates']
const milk = ['regular full fat/skinny', 'soy', 'almond', 'oat', 'coconut', 'pea', 'hazelnut', 'cashew', 'potato', 'hemp', 'rice', 'tiger nut']

// Variables with random select from the array formulas
const flavoursIndex = Math.floor(Math.random() * flavours.length)
const addOnsIndex = Math.floor(Math.random() * addOns.length)
const milkIndex = Math.floor(Math.random() * milk.length)

//Randomized message
console.log('Welcome to our "Chilled Delights" smoothie shop!')
console.log('You\'re craving a delightful smoothie, but you can\'t make up your mind what flavours to choose?')
console.log('Don\'t worry, our "Smoothie Generator" is here to help!')
console.log(`You should have ${flavours[flavoursIndex]} and ${addOns[addOnsIndex]} smoothie with ${milk[milkIndex]} milk.`)
console.log('Enjoy!')