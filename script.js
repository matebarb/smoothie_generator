// Arrays with items for randomly generated message
const flavours = ['strawberry', 'raspberry', 'blueberry', 'blackberry', 'mango', 'papaya', 'pineapple', 'avocado', 'peach', 'apricot', 'banana', 'green apple']
const add_ons = ['cocoa nibs', 'coconut shavings', 'peanut butter', 'chia seeds', 'matcha', 'macadamia nuts', 'madagascar vanilla', 'pistachio', 'spirulina', 'acacia honey', 'fresh ginger', 'medjool dates']
const milk = ['regular full fat/skinny', 'soy', 'almond', 'oat', 'coconut', 'pea', 'hazelnut', 'cashew', 'potato', 'hemp', 'rice', 'tiger nut']

// Variables with random select from the array formulas
const flavours_index = Math.floor(Math.random() * flavours.length)
const add_ons_index = Math.floor(Math.random() * add_ons.length)
const milk_index = Math.floor(Math.random() * milk.length)