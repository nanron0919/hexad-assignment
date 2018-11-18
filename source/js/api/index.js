import 'es6-promise';

const fetchItems = () => fetch('/configs/items.json').then(res => res.json());

export default {
    fetchItems,
};