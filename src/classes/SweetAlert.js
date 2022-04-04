import swal from 'sweetalert'

export class SweetAlert {
    constructor(alertTitle, alertText, alertIconText, alertBtnMessage) {
        this.alertTitle = alertTitle;
        this.alertText = alertText;
        this.alertIconText = alertIconText;
        this.alertBtnMessage = alertBtnMessage;
    }

    generateSweetAlert() {
        return swal({
            title: this.alertTitle,
            text: this.alertText,
            icon: this.alertIconText,
            buttons: {
                confirm: {
                    text: this.alertBtnMessage,
                    value: "Ok",
                }
            }
        })
    }

    async generateSweetAlertDeleteConfirmation() {
        const value = await swal({
            title: this.alertTitle,
            text: this.alertText,
            icon: this.alertIconText,
            buttons: {
                cancel: "Cancel",
                confirm: {
                    text: this.alertBtnMessage,
                    value: "confirm"
                }
            }
        });
        switch (value) {
            case ("confirm"):
                swal("Employee record deleted", "This employee record has been deleted from the system", "success");
                return true;
            default:
                return false;
        }
    }
}

export default SweetAlert