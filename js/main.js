// Завдання 1
// Реалізуйте клас, що описує коло. Клас має складатися з на-
// ступних компонентів:
// ■ поле з радіусом кола;
// ■ get-властивість, що повертає радіус кола;
// ■ set-властивість, що встановлює радіус кола;
// ■ get-властивість, що повертає діаметр кола;
// ■ метод, що обчислює площу кола;
// ■ метод, що обчислює довжину кола.
// Продемонструйте роботу властивостей і методів.

{
    class Circle {
        constructor(radius) {
            this._radius = radius;
        }

        // Get-властивість для отримання радіуса кола
        get radius() {
            return this._radius;
        }

        // Set-властивість для встановлення радіуса кола
        set radius(newRadius) {
            if (newRadius >= 0) {
                this._radius = newRadius;
            } else {
                console.error("Радіус не може бути від'ємним.");
            }
        }

        // Get-властивість для отримання діаметру кола
        get diameter() {
            return this._radius * 2;
        }

        // Метод для обчислення площі кола
        calculateArea() {
            return Math.PI * this._radius ** 2;
        }

        // Метод для обчислення довжини кола
        calculateCircumference() {
            return 2 * Math.PI * this._radius;
        }
    }

   
    const circle = new Circle(5); // Створення об'єкту кола з радіусом 5

    console.log(`Радіус кола: ${circle.radius}`);
    console.log(`Діаметр кола: ${circle.diameter}`);
    console.log(`Площа кола: ${circle.calculateArea()}`);
    console.log(`Довжина кола: ${circle.calculateCircumference()}`);

    // Заміна радіус кола через set-властивість
    circle.radius = 7;
    console.log(`Новий радіус кола: ${circle.radius}`);
}



// Завдання 2
// Реалізуйте клас, що описує HTML - елемент.
// Клас HtmlElement має містити:
// ■ назву тегу;
// ■ тег, що самозакривається;
// ■ текстовий вміст;
// ■ масив атрибутів;
// ■ масив стилів;
// ■ масив вкладених таких самих тегів;
// ■ метод встановлення атрибуту;
// ■ метод встановлення стилю;
// ■ метод додавання вкладеного елемента в кінець поточного
// елемента;
// ■ метод додавання вкладеного елемента на початок поточ -
//     ного елемента;
// ■ метод getHtml(), який повертає HTML - код у вигляді ряд -
//     ка, включаючи HTML - код вкладених елементів.
// За допомогою написаного класу реалізувати наступний блок
// і додати його на сторінку за допомогою document.write().
// Зверніть увагу.Щоб отримати весь цей HTML - код у вигляді
// рядка, достатньо буде викликати метод getHtml тільки у тег
// з ідентифікатором wrapper.

{
    // class HtmlElement {
    //     constructor(tagName, isSelfClosing = false, textContent = "") {
    //         this.tagName = tagName;
    //         this.isSelfClosing = isSelfClosing;
    //         this.textContent = textContent;
    //         this.attributes = [];
    //         this.styles = [];
    //         this.children = [];
    //     }

    //     setAttribute(attributeName, attributeValue) {
    //         this.attributes.push({ name: attributeName, value: attributeValue });
    //     }

    //     setStyle(styleName, styleValue) {
    //         this.styles.push({ name: styleName, value: styleValue });
    //     }

    //     addChild(childElement) {
    //         this.children.push(childElement);
    //     }

    //     // Метод для додавання вкладеного елемента на початок поточного елемента
    //     prependChild(childElement) {
    //         this.children.unshift(childElement);
    //     }

    //     getHtml() {
    //         const attributesString = this.attributes
    //             .map((attribute) => `${attribute.name}="${attribute.value}"`)
    //             .join(" ");
    //         const stylesString = this.styles
    //             .map((style) => `${style.name}:${style.value};`)
    //             .join(" ");

    //         let element = `<${this.tagName}`;
    //         if (attributesString) {
    //             element += ` ${attributesString}`;
    //         }
    //         if (stylesString) {
    //             element += ` style="${stylesString}"`;
    //         }
    //         if (this.isSelfClosing) {
    //             element += `/>`;
    //         } else {
    //             element += `>${this.textContent}`;
    //             for (const child of this.children) {
    //                 element += child.getHtml();
    //             }
    //             element += `</${this.tagName}>`;
    //         }

    //         return element;
    //     }
    // }

    // // Створення HTML-елементів
    // const wrapper = new HtmlElement("div");
    // const heading = new HtmlElement("h1", false, "Заголовок сторінки");
    // const paragraph = new HtmlElement("p", false, "Це текстовий параграф.");
    // const link = new HtmlElement("a", false, "Посилання");
    // link.setAttribute("href", "https://example.com");

    // // Додавання вкладених елементів
    // wrapper.addChild(heading);
    // wrapper.addChild(paragraph);
    // paragraph.addChild(link);

    // // Додавання вкладеного елемента на початок
    // const intro = new HtmlElement("p", false, "Вітаємо на нашому веб-сайті!");
    // wrapper.prependChild(intro);

    // // Генерація HTML-коду та вивід на сторінку
    // const htmlCode = wrapper.getHtml();
    // document.write(htmlCode);
}


// Завдання 3
// Реалізувати клас, який описує CSS- клас.
// Клас CssClass має містити в собі:
// ■ назву CSS-класу;
// ■ масив стилів;
// ■ метод встановлення стилю;
// ■ метод видалення стилю;
// ■ метод getCss(), який повертає CSS-код у вигляді рядка.

{
    class CssClass {
        constructor(className) {
            this.className = className;
            this.styles = {};
        }

        // Метод для встановлення стилю
        setStyle(styleName, styleValue) {
            this.styles[styleName] = styleValue;
        }

        // Метод для видалення стилю
        removeStyle(styleName) {
            if (this.styles.hasOwnProperty(styleName)) {
                delete this.styles[styleName];
            }
        }

        // Метод для отримання CSS-коду
        getCss() {
            let cssCode = `.${this.className} {`;
            for (const styleName in this.styles) {
                if (this.styles.hasOwnProperty(styleName)) {
                    const styleValue = this.styles[styleName];
                    cssCode += `${styleName}: ${styleValue};`;
                }
            }
            cssCode += `}`;
            return cssCode;
        }
    }

    // Приклад використання
    const myClass = new CssClass("my-class");
    myClass.setStyle("color", "red");
    myClass.setStyle("font-size", "16px");

    console.log(myClass.getCss());
}


// Завдання 4
// Реалізуйте клас, що описує блок HTML-документ.
// Клас HtmlBlock має містити:
// ■ колекцію стилів, описаних за допомогою класу CssClass;
// ■ кореневий елемент, описаний за допомогою класу
// HtmlElement;
// ■ метод getCode(), який повертає рядок з HTML-кодом
// (спочатку теги style з описом усіх класів, а потім увесь
// HTML-вміст з кореневого тегу та його вкладених елемен-
// тів).

{
    //2

    // class CssClass {
    //     constructor(className) {
    //       this.className = className;
    //       this.styles = {};
    //     }
      
    //     setStyle(styleName, styleValue) {
    //       this.styles[styleName] = styleValue;
    //     }
      
    //     getCss() {
    //       let cssCode = `.${this.className} {`;
    //       for (const styleName in this.styles) {
    //         if (this.styles.hasOwnProperty(styleName)) {
    //           const styleValue = this.styles[styleName];
    //           cssCode += `${styleName}: ${styleValue};`;
    //         }
    //       }
    //       cssCode += `}`;
    //       return cssCode;
    //     }
    //   }
      
    //   class HtmlElement {
    //     constructor(tagName, isSelfClosing = false, textContent = "") {
    //       this.tagName = tagName;
    //       this.isSelfClosing = isSelfClosing;
    //       this.textContent = textContent;
    //       this.attributes = [];
    //       this.styles = [];
    //       this.children = [];
    //     }
      
    //     setAttribute(attributeName, attributeValue) {
    //       this.attributes.push({ name: attributeName, value: attributeValue });
    //     }
      
    //     setStyle(styleName, styleValue) {
    //       this.styles.push({ name: styleName, value: styleValue });
    //     }
      
    //     addChild(childElement) {
    //       this.children.push(childElement);
    //     }
      
    //     getHtml() {
    //       const attributesString = this.attributes
    //         .map((attribute) => `${attribute.name}="${attribute.value}"`)
    //         .join(" ");
    //       const stylesString = this.styles
    //         .map((style) => `${style.name}:${style.value};`)
    //         .join(" ");
      
    //       let element = `<${this.tagName}`;
    //       if (attributesString) {
    //         element += ` ${attributesString}`;
    //       }
    //       if (stylesString) {
    //         element += ` style="${stylesString}"`;
    //       }
    //       if (this.isSelfClosing) {
    //         element += `/>`;
    //       } else {
    //         element += `>${this.textContent}`;
    //         for (const child of this.children) {
    //           element += child.getHtml();
    //         }
    //         element += `</${this.tagName}>`;
    //       }
      
    //       return element;
    //     }
    //   }
      
    //   class HtmlBlock {
    //     constructor() {
    //       this.styles = [];
    //       this.rootElement = null;
    //     }
      
    //     addCssClass(cssClass) {
    //       this.styles.push(cssClass);
    //     }
      
    //     setRootElement(rootElement) {
    //       this.rootElement = rootElement;
    //     }
      
    //     getCode() {
    //       let cssCode = "";
    //       for (const cssClass of this.styles) {
    //         cssCode += cssClass.getCss() + "\n";
    //       }
      
    //       const htmlCode = this.rootElement.getHtml();
      
    //       return `<style>\n${cssCode}</style>\n${htmlCode}`;
    //     }
    //   }
      
    //   // Створення CSS-класів
    //   const headingClass = new CssClass("heading");
    //   headingClass.setStyle("font-size", "24px");
    //   headingClass.setStyle("color", "blue");
      
    //   const paragraphClass = new CssClass("paragraph");
    //   paragraphClass.setStyle("font-size", "16px");
    //   paragraphClass.setStyle("color", "green");
      
    //   // Створення HTML-елементів
    //   const rootElement = new HtmlElement("div", false);
    //   rootElement.setAttribute("id", "wrapper");
      
    //   const heading = new HtmlElement("h1", false, "Заголовок сторінки");
    //   heading.setAttribute("heading");
    //   rootElement.addChild(heading);
      
    //   const paragraph = new HtmlElement("p", false, "Це текстовий параграф.");
    //   paragraph.setAttribute("paragraph");
    //   rootElement.addChild(paragraph);
      
    //   // Створення блоку та додавання CSS-класів та кореневого елементу
    //   const block = new HtmlBlock();
    //   block.addCssClass(headingClass);
    //   block.addCssClass(paragraphClass);
    //   block.setRootElement(rootElement);
      
    //   // Генерація HTML-коду та вивід на сторінку
    //   const htmlCode = block.getCode();
    //   document.getElementById("output").innerHTML = htmlCode;
      
}

