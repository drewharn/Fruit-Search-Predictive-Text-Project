//I will define the variables
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
//Now I will define the function to search for fruit.
function search(str) {
    let results = [];
    const searchTerm = str.toLowerCase();
    results = fruit.filter(fruit => fruit.toLowerCase().includes(searchTerm));
    return results;
}
    function searchHandler(e){
        const inputVal = e.target.value;
        const results = search(inputVal);
        showSuggestions(results, inputVal);
    } //Here I will define how the fruit names are displayed.
    function showSuggestions(results, inputVal){
        suggestions.innerHTML = '';
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            suggestions.appendChild(li);
            li.addEventListener('mouseover', function() {
                li.style.backgroundColor = 'lightgray';
            });
            li.addEventListener('mouseout', function() {
                li.style.backgroundColor = '';
            })
        });
        suggestions.style.display = results.length > 0 ? 'block' : 'none';
    }
    function useSuggestion(e){
        if(e.target.tagName === 'LI') {
            input.value = e.target.textContent;
            suggestions.style.display = 'none';
        }
    }
    //At the end of the JavaScript I will add how the name of the fruit is added to the search bar. 
    input.addEventListener('keyup', searchHandler);
    suggestions.addEventListener('click', useSuggestion);
        