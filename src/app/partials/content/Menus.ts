class MenuItem {
    title!: string;
    page!: string;
    resource!: string;

    /**
     *
     */
    constructor(t: string, p: string, r: string) {
        this.title = t;
        this.page = p;
        this.resource = r;
    }
}

const menuItems = [
    {
        title: "Home",
        root: true,
        alignment: "left",
        page: "dashboard",
        translate: "MENU.DASHBOARD"
    },
    {
        title: "Companies",
        root: true,
        alignment: "left",
        page: "companies",
        translate: "MENU.DASHBOARD"
    },
    {
        title: "About Us",
        root: true,
        alignment: "left",
        page: "aboutUs",
        translate: "MENU.DASHBOARD"
    },
    {
        title: "Contact",
        root: true,
        alignment: "left",
        page: "contact",
        translate: "MENU.DASHBOARD"
    }
]

const menuObject = menuItems.map((item, index) => {
    new MenuItem(item.title, item.page, item.translate);
});


export default menuObject;
