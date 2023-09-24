$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    asNavFor: '.slider-for',
    arrows: false,
    dots: false,
    focusOnSelect: true
});
$('.carousel-event').slick({
    infinite: false,
    dots: true,
});
$('.news-carousel').slick({
    infinite: false,
    dots: false,
});
$("[data-group-checkbox]").on("click", function () {
    var state = $(this).prop("checked"),
        group = $(this).attr("data-group-checkbox");
    $("[data-item-checkbox=" + group + "]").prop("checked", state);
    checkCount(group)
});

// Hitung item yang di select
var checkCount = function (idGroup) {
    var count = $("[data-item-checkbox=" + idGroup + "]:checked").length;
    if (count > 0) {
        $("#" + idGroup).addClass("show").css({ "height": "auto", "-webkit-transform": "translateY(0)", "transform": "translateY(0)" })
        $("#count").text(count)
    } else {
        $("#" + idGroup).toggleClass("show").css({ "-webkit-transform": "translateY(110%)", "transform": "translateY(110%)", "height": "1px" })
    }
}

$("[data-item-checkbox]").on("click", function () {
    var itemgroup = $(this).attr("data-item-checkbox");
    if ($("[data-item-checkbox=" + itemgroup + "]:checked").length === $("[data-item-checkbox]").length) {
        $("[data-group-checkbox=" + itemgroup + "]").prop({ indeterminate: false, checked: true })
    } else if ($("[data-item-checkbox=" + itemgroup + "]:checked").length === 0) {
        $("[data-group-checkbox=" + itemgroup + "]").prop({ indeterminate: false, checked: false })
    } else {
        $("[data-group-checkbox=" + itemgroup + "]").prop({ indeterminate: true, checked: false })
    }
    checkCount(itemgroup)
})

// Disabled Form Jika Di centang
$("[data-input-disabled]").on("click", function () {
    var idFormDisabled = $(this).attr("data-input-disabled")
    $("#" + idFormDisabled).val("").prop({ disabled: $(this).prop("checked") })
})


// nice-select

$(document).on("DOMContentLoaded", () => {
    $(".select").niceSelect();
    $(".nice-select.tabs .option").on("click", function () {
        var attr = $(this).attr("data-value");
        var tab = new bootstrap.Tab($("[data-bs-target='" + attr + "']"));
        tab.show();
    });
});

// Dropdown

(function () {
    $(document).on("click", (e) => {
        var toggle_item = $(e.target).closest(".toggle-item"),
            toggle_head = $(e.target).closest(".toggle-head"),
            action_item = $(e.target).closest(".action-item"),
            action_head = $(e.target).closest(".action-head");

        if (action_item.length) {
            if (action_head.length && action_item.hasClass("active")) return action_item.removeClass("active");
            $(".action-item").removeClass("active");
            return action_item.toggleClass("active");
        }

        if (toggle_head.length && toggle_item.hasClass("active")) return toggle_item.removeClass("active");
        $(".toggle-item, .action-item").removeClass("active");
        toggle_item.toggleClass("active");
    });
})();

$("[data-password]").on("click", function (e) {
    e.preventDefault()
    var inPutPassword = $("#" + $(this).attr("data-password"))
    var bxIcons = $(this).children(".bx")
    console.log(bxIcons)
    if (inPutPassword.attr("type") === "text") {
        inPutPassword.attr("type", "password")
        bxIcons.removeClass("bx-hide").addClass("bx-show")
    } else {
        inPutPassword.attr("type", "text")
        bxIcons.removeClass("bx-show").addClass("bx-hide")
    }
});

(function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
})();


// Datepicker

(function () {
    var dateRange = $(".js-date-range"),
        datepicker = $(".datepicker .action-item"),
        closeDatepicker = datepicker.find(".datepicker-close");

    closeDatepicker.on("click", function (e) {
        e.stopPropagation();
        $(".datepicker .action-item").removeClass("active");
    });
    if (dateRange.length) {
        dateRange.each(function () {
            var _this = $(this),
                single = _this.data("single-month"),
                container = _this.data("container"),
                clear = $(".js-date-clear");

            _this.dateRangePicker({
                inline: true,
                autoClose: true,
                format: "DD MMMM, YYYY",
                separator: " - ",
                showShortcuts: false,
                container: container,
                singleDate: true,
                singleMonth: single,
                showTopbar: false,
                stickyMonths: true,
                hoveringTooltip: false,
                alwaysOpen: true,
                customArrowPrevSymbol:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M14.207 7.793a1 1 0 0 1 0 1.414L11.414 12l2.793 2.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 1 1.414 0z" fill="#777e91"/></svg>',
                customArrowNextSymbol:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M9.793 7.793a1 1 0 0 0 0 1.414L12.586 12l-2.793 2.793a1 1 0 0 0 1.414 1.414l3.5-3.5a1 1 0 0 0 0-1.414l-3.5-3.5a1 1 0 0 0-1.414 0z" fill="#777e91"/></svg>',
                setValue: function setValue(s) {
                    if ($(this).attr("readonly")) {
                        $(this).val(s);
                    } else {
                        $(this).val(s);
                    }
                },
            });

            _this.data("dateRangePicker").setStart("2022-01-20");

            clear.on("click", function () {
                _this.data("dateRangePicker").setStart(new Date());
            });
        });
    }

})();
