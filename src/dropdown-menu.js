class DropdownMenu {
    constructor(toggleButtonSelector, contentDivSelector) {
        this.itemsVisible = true;
        this.toggleButton = document.querySelector(toggleButtonSelector);
        this.toggleButton.addEventListener('click', () => {
            this.toggleItemsVisibility();
        });
        this.websitesSection = document.querySelector(contentDivSelector);

        this.toggleItemsVisibility();
    }

    toggleItemsVisibility() {
        if (this.itemsVisible) {
            this.websitesSection.style.display = 'none';
        }
        else {
            this.websitesSection.style.display = 'block';
        }

        this.itemsVisible = !this.itemsVisible;
    }
}

export {DropdownMenu};