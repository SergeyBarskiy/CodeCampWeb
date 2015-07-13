/// <reference path="../../scripts/typings/bootstrap/bootstrap.d.ts" />
/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
module App.Utilities {


    export interface IUtilities {
        showPleaseWait: () => void;
        hidePleaseWait: () => void;
        showMessage: (content: string, buttons?: IButtonForMessage[]) => void;
    }

    export interface IButtonForMessage {
        method?: () => void;
        label: string;
    }

    class Utilities implements IUtilities {
        showPleaseWait: () => void;
        hidePleaseWait: () => void;
        showMessage: (content: string, buttons?: IButtonForMessage[]) => void;

        constructor(private $window: ng.IWindowService, private globalsService: App.Config.IGLobals) {
            var that = this;
            var pleaseWaitDiv = angular.element(
                "<div class=\"modal\" id=\"globalPleaseWaitDialog\" data-backdrop=\"static\" data-keyboard=\"false\">" +
                "  <div class=\"modal-dialog\">" +
                "    <div class=\"modal-content\">" +
                "      <div class=\"modal-header\">" +
                "         <h1>Processing...</h1>" +
                "      </div>" +
                "      <div class=\"modal-body\" id=\"globallPleaseWaitDialogBody\">" +
                "         <div class=\"progress progress-striped active\">" +
                "           <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"100\"" +
                "               aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%\">" +
                "           </div>" +
                "         </div>" +
                "        <div class=\"progress-bar progress-striped active\"><div class=\"bar\" style=\"width: 100%;\"></div></div>" +
                "      </div>" +
                "    </div>" +
                "  </div>" +
                "</div>"
                );

            var messageDiv = angular.element(
                "<div class=\"modal\" id=\"globalMessageDialog\" tabindex=\"-1\" " +
                "       role=\"dialog\" data-backdrop=\"static\" data-keyboard=\"true\">" +
                "  <div class=\"modal-dialog\">" +
                "    <div class=\"modal-content\">" +
                "      <div class=\"modal-header\">" +
                "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>" +
                "        <h4 class=\"modal-title\"></h4>" +
                "      </div>" +
                "      <div class=\"modal-body\">" +
                "      </div>" +
                "      <div class=\"modal-footer\">" +
                "       <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>" +
                "      </div>" +
                "    </div>" +
                "  </div>" +
                "</div>"
                );


            var resize = function (event: JQueryEventObject) {
                var dialog = angular.element("#" + event.data.name + " .modal-dialog");
                dialog.css("margin-top",(angular.element(that.$window).height() - dialog.height()) / 2 -
                    parseInt(dialog.css("padding-top"), 10));
            };

            var animate = function (event: JQueryEventObject) {
                var dialog = angular.element("#" + event.data.name + " .modal-dialog");
                dialog.css("margin-top", 0);
                dialog.animate(
                    {
                        "margin-top": (angular.element(that.$window).height() - dialog.height()) / 2 -
                        parseInt(dialog.css("padding-top"), 10)
                    }, "slow");
                pleaseWaitDiv.off("shown.bs.modal", animate);

            };

            this.showPleaseWait = function () {
                angular.element($window).on("resize", null, { name: "globalPleaseWaitDialog" }, resize);
                pleaseWaitDiv.on("shown.bs.modal", null, { name: "globalPleaseWaitDialog" }, animate);
                pleaseWaitDiv.modal();
                pleaseWaitDiv.focus();
            };

            this.hidePleaseWait = function () {
                pleaseWaitDiv.modal("hide");
                angular.element($window).off("resize", resize);
            };


            this.showMessage = function (content: string, buttons?: IButtonForMessage[]) {
                angular.element($window).on("resize", null, { name: "globalMessageDialog" }, resize);

                messageDiv.find(".modal-body").html(content.replace("\n", "<br>"));
                messageDiv.on("shown.bs.modal", null, { name: "globalMessageDialog" }, animate);
                if (buttons) {
                    messageDiv.find(".modal-header").children().remove("button");
                    var footer = messageDiv.find(".modal-footer");
                    footer.empty();
                    angular.forEach(buttons, function (button: IButtonForMessage) {
                        var newButton = angular.element("<button type=\"button\" class=\"btn btn-default\"></button>");
                        newButton.text(button.label);
                        if (button.method) {
                            newButton.click(function () {
                                messageDiv.modal("hide");
                                button.method();
                            });
                        } else {
                            newButton.click(function () {
                                messageDiv.modal("hide");
                            });
                        }
                        footer.append(newButton);
                    });

                } else {
                    messageDiv.find(".modal-header").html("<button type=\"button\" class=\"close\" data-dismiss=\"modal\" " +
                        " aria-hidden=\"true\">&times;</button><h4 class=\"modal-title\"></h4>");
                    messageDiv.find(".modal-footer").html("<button type=\"button\" class=\"btn btn-default\" " +
                        " data-dismiss=\"modal\">Close</button>");
                }
                messageDiv.find(".modal-title").text(globalsService.applicationName);
                messageDiv.modal();
                messageDiv.focus();
            };
        }
    }

    angular.module("app.utilities", ["app.globalsModule"])
        .service("utilities", ["$window", "globalsService", Utilities]);
} 