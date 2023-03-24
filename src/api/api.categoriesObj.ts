export interface CategoriesObj {
    [key:string] : {
        id: string,
        name: string,
        img: string,
        url: string
    }
};

export const categoriesObj: CategoriesObj = {
    hotDishes: {
        id: "asdgh991237dfgh",
        name: "Горячее",
        img: "https://s3.smartofood.ru/ayan_cafe_ru/menu/3be4e580-ac60-5e80-ad1d-86ca9a2b6cbf.jpg",
        url: "/hot_dishes"
    },
    soups: {
        id: "asdghfghfghfgh",
        name: "Супы",
        img: "https://s3.smartofood.ru/ayan_cafe_ru/menu/b5c0edd1-8d3b-5450-bf75-f38c567a5217.jpg",
        url: "/soups"
    },
    traditionsDishes: {
        id: "asd12351237dfgh",
        name: "Традиционная кухня",
        img: "https://s3.smartofood.ru/ayan_cafe_ru/menu/30d15236-9fed-51e8-87d3-609a0490bc48.jpg",
        url: "/buryat_cuisine"
    },
   salats: {
        id: "as324534567dfgh",
        name: "Салаты",
        img: "https://s3.smartofood.ru/ayan_cafe_ru/menu/33c40203-3576-5f5e-98ff-2cffd9bcd0e8.jpg",
        url: "/salats"
    },
    drinks: {
        id: "asdg234`1237dfgh",
        name: "Напитки",
        img: "https://img.delo-vcusa.ru/2017/01/Klyukvennyy-mors.jpg",
        url: "/drinks"
    },
    other: {
        id: "asd23451237dfgh",
        name: "Хлеб/десерты",
        img: "https://s3.smartofood.ru/ayan_cafe_ru/menu/f993c839-3c3c-5172-8a1a-b1bccbbaf869.jpg",
        url: "/other"
    }
};


export const fetchCategories = () => new Promise((resolve) => {
    window.setTimeout(function () {
        resolve(categoriesObj);
    }, 2000);
});
