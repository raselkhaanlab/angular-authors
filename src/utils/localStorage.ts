import { IAuthor } from "src/app/authors/authors-model";

const key = 'authors';

export function setItem(item:IAuthor): IAuthor[] {
    let items = getItems();
    let isFind = items.find(element=>element.slug === item.slug);
    if(isFind) {
        items = items.filter(element=> element.slug !==item.slug);
    }
    else {
        items.push(item);
    }
    let prepareItem = JSON.stringify(items,null,2);
    window.localStorage.setItem(key,prepareItem);
    return items;
}
export function getItems():IAuthor[] {
    let allItems = window.localStorage.getItem(key);
    if(allItems) {
        return JSON.parse(allItems);
    }
    return [];
}

export function deleteItem (item:IAuthor):IAuthor[] {
    let allAuthors:IAuthor[] = getItems();
    allAuthors = allAuthors.filter((currentItem:IAuthor)=>{
        return item.slug !== currentItem.slug;
    })
    window.localStorage.setItem(key,JSON.stringify(allAuthors,null,2));
    return allAuthors;
}