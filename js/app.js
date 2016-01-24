/* CONSTANTS */
const START_TIME = 800;
const START_TIME_HR = 8;
const END_TIME = 2200;
const END_TIME_HR = 22;
const TIMETABLE_RANGE = END_TIME_HR - START_TIME_HR;
const TIMETABLE_DAYS_SHOWN = 7;
const DAYS_OF_WEEK = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

/* LOCATIONS */
var SDE = ['AKI3', 'AKI4A', 'AKI4B', 'AKI5A', 'AKI5B', 'AKIMAUD', 'AKIMLA4', 'AKIMLA5', 'DDL3-2', 'CELC-SR1A', 'CELC-TR7', 'CELS-01-06', 'CELS-01-08', 'SDE-421', 'SDE-422', 'SDE-423', 'SDE-424', 'SDE-425', 'SDE-426', 'SDE-427', 'SDE-CR1', 'SDE-CR4', 'SDE-DDL2-2', 'SDE-DV1', 'SDE-DV2', 'SDE-DV3', 'SDE-ER1', 'SDE-ER4', 'SDE-ER5', 'SDE-ES1', 'SDE-ES2', 'SDE-GIS', 'SDE-ISD-1', 'SDE-MEZZ', 'SDE-SR10', 'SDE-SR11', 'SDE-SR12', 'SDE-SR13', 'SDE-SR14', 'SDE-SR15', 'SDE-SR4', 'SDE-SR7', 'SDE-SR8', 'SDE-SR9'];
var AS = ['AS-DV', 'AS1-0201', 'AS1-0203', 'AS1-0204', 'AS1-0205', 'AS1-0207', 'AS1-0208', 'AS1-0209', 'AS1-0210', 'AS1-0212', 'AS1-0213', 'AS1-0301', 'AS1-0302', 'AS1-0303', 'AS1-0304', 'AS1-0524', 'AS1-0548', 'AS2-0203', 'AS2-0204', 'AS2-0302', 'AS2-0311', 'AS2-0312', 'AS2-0313', 'AS2-0316', 'AS2-0413', 'AS2-0509', 'AS2-0510', 'AS3-0207', 'AS3-0208', 'AS3-0209', 'AS3-0212', 'AS3-0213', 'AS3-0214', 'AS3-0215', 'AS3-0302', 'AS3-0303', 'AS3-0304', 'AS3-0305', 'AS3-0306', 'AS3-0307', 'AS3-0308', 'AS3-0309', 'AS3-0523', 'AS3-0620', 'AS4-0109', 'AS4-0110', 'AS4-0114', 'AS4-0115', 'AS4-0116', 'AS4-0117', 'AS4-0118', 'AS4-0119', 'AS4-0206', 'AS4-0208', 'AS4-0306', 'AS4-0335', 'AS4-0601', 'AS4-0602', 'AS4-0603', 'AS4-0604', 'AS4-B107', 'AS4-B109', 'AS4-B110', 'AS5-0202', 'AS5-0203', 'AS5-0205', 'AS5-0309', 'AS6-0204', 'AS6-0205', 'AS6-0208', 'AS6-0212', 'AS6-0214', 'AS6-0215B', 'AS6-0333', 'AS6-0338', 'AS6-0421', 'AS6-0426', 'AS7-0101', 'AS7-0102', 'AS7-0106', 'AS7-0117', 'AS7-0119', 'AS7-0201A', 'AS7-0214', 'AS7-0411', 'AS7-0413', 'AS7-0642', 'LT8', 'LT9', 'LT10', 'LT11', 'LT12', 'LT13', 'LT14', 'LT15', 'MMSR2-1', 'MMSR2-2', 'MMSR2-3', 'MMSR3-1', 'MMSR3-4', 'MMSR3-5'];
var BIZ = ['BIZ1-0201', 'BIZ1-0202', 'BIZ1-0203', 'BIZ1-0204', 'BIZ1-0205', 'BIZ1-0206', 'BIZ1-0301', 'BIZ1-0302', 'BIZ1-0303', 'BIZ1-0304', 'BIZ1-0305', 'BIZ1-0307', 'BIZ1-CMRI', 'BIZ1-SR6-1', 'BIZ1-SR6-4', 'BIZ2-0112', 'BIZ2-0114', 'BIZ2-0115', 'BIZ2-0116', 'BIZ2-0117', 'BIZ2-0118', 'BIZ2-0201', 'BIZ2-0202', 'BIZ2-0224', 'BIZ2-0226', 'BIZ2-0227', 'BIZ2-0228', 'BIZ2-0229', 'BIZ2-0301', 'BIZ2-0302', 'BIZ2-0303', 'BIZ2-0404', 'BIZ2-0413A', 'BIZ2-0413B', 'BIZ2-0413C', 'BIZ2-0420', 'BIZ2-0422', 'BIZ2-0509', 'BIZ2-0510', 'BIZ2-B104', 'LT18', 'LT19', 'SR@LT19', 'i3-0344', 'i3-0345', 'i3-0346', 'i3-0347', 'i3-Aud'];
var UT = ['CAPT-DV', 'CAPT-SR1', 'CAPT-SR3', 'CAPT-SR4', 'CAPT-SR5', 'CAPT-SR6', 'ER2', 'ER3', 'ER6', 'ER7', 'ER8', 'ERC-ALR', 'ERC-GLR', 'ERC-SR1', 'ERC-SR10', 'ERC-SR11', 'ERC-SR2', 'ERC-SR3', 'ERC-SR4', 'ERC-SR8', 'ERC-SR9CAM', 'RC4-DV1', 'RC4-DV2', 'RC4-SR1', 'RC4-SR3', 'RC4-SR4', 'RC4-SR5', 'RC4-SR6', 'RH-SR', 'USP-DV', 'USP-MC', 'USP-MML', 'USP-SR1', 'USP-SR2', 'USP-SR3', 'USP-TR1', 'UT-AUD1', 'UT-AUD2', 'UT-AUD3', 'UTSRC-DA2', 'UTSRC-GLR', 'UTSRC-LT50', 'UTSRC-LT51', 'UTSRC-LT52', 'UTSRC-LT53', 'UTSRC-SR1', 'UTSRC-SR2', 'UTSRC-SR3', 'UTSRC-SR4', 'UTSRC-SR5', 'UTSRC-SR6', 'UTSRC-SR7', 'UTSRC-SR8', 'UTSRC-SR9', 'SR4-1', 'SR4-2', 'SR4-3', 'SR4-4', 'SR5-1', 'SR5-2', 'SR5-3', 'SR5-4', 'SR5-5', 'TC-SR3', 'TC-SR4', 'TC-SR5', 'TC-SR6', 'TLIAP', 'TP-ALR', 'TP-GLR', 'TP-SR10', 'TP-SR2', 'TP-SR3', 'TP-SR4', 'TP-SR5', 'TP-SR6', 'TP-SR7', 'TP-SR8', 'TP-SR9', 'Y-CompLab', 'Y-DV', 'Y-EC-CR15', 'Y-EC-CR17', 'Y-EC-GLRm1', 'Y-EC-GLRm2', 'Y-EC-PgRm1', 'Y-RC1-CR1', 'Y-RC1-CR3', 'Y-RC1-CR4', 'Y-RC1-CR5', 'Y-RC1-CR6', 'Y-RC1-CR7', 'Y-RC1-CR8', 'Y-RC1-Conf', 'Y-RC1-LT1', 'Y-RC2-CR11', 'Y-RC2-CR12', 'Y-RC2-CR13', 'Y-RC2-CR14', 'Y-RC2-CR9', 'Y-RC2-KCRm', 'Y-RC3-CR18', 'Y-RC3-CR19', 'Y-RC3-CR20', 'Y-RC3-CR21', 'Y-RC3-CR22', 'Y-RC3-CR23', 'YBlackBox', 'YIH-Paris', 'YIH-TR2', 'YIH-Tokyo', 'YLab1-Bio', 'YLab2AChem', 'YLab3-Phys', 'YLab4OChem', 'YPerfHall', 'YPracRoom6', 'YStudio1Dc', 'YStudio2GC'];
var OTHER = ['CLB-0404', 'CLab', 'EXEC-SR', 'FMR', 'FST-Lab', 'HSSMLCR', 'ISS-DV', 'Innovation', 'LT3', 'LT4', 'LinELab', 'M14A&M14B', 'MLab', 'MM Study R', 'MPA', 'MT-Court', 'MicWLab', 'NAK-AUD', 'NGS-DV', 'OH', 'OTHCONFRM', 'POWERLAB', 'ProjLab', , 'RMI-SR1', 'RS', 'RVRC SRD-D', 'RVRC-Resou', 'RVRC-SRB-D', 'RecS', 'SPSDryLab', 'SignalLab', 'TechHub', 'VCRm', 'WS2-0530', 'dRm1', 'dRm2', 'dRm3', 'dRm4', 'dRm5', 'dRmBLD1', 'undefined'];
var COM = ['COM1-0113', 'COM1-0114', 'COM1-0120', 'COM1-0201', 'COM1-0202', 'COM1-0203', 'COM1-0204', 'COM1-0206', 'COM1-0207', 'COM1-0208', 'COM1-0209', 'COM1-0210', 'COM1-0212', 'COM1-0216', 'COM1-0217', 'COM1-0218', 'COM1-B101', 'COM1-B103', 'COM1-B108', 'COM1-B109', 'COM1-B110', 'COM1-B111', 'COM1-B112', 'COM1-B113', 'COM2-0108', 'CR2-1', 'CR2-2', 'CR3-3', 'CR3-4', 'CR3-5', 'CR3-6', 'CR3-7', 'CR4-1', 'CR4-2', 'CR5', 'LT16', 'LT17'];
var SCI = ['CQT0315', 'CQT0318', 'LSLAB1&2', 'LSLAB3', 'LSLAB4', 'LSLAB5', 'LSLAB6', 'LSLAB7', 'LSLAB8', 'LSLAB9', 'LT20', 'LT21', 'LT22', 'LT24', 'LT25', 'LT26', 'LT27', 'LT31', 'LT32', 'LT33', 'LT34', 'MD1-05-01A', 'MD1-06-01A', 'MD1-07-01A', 'MD1-08-01E', 'MD1-09-01B', 'MD10-01-01', 'MD4-02-03E', 'MD7-02-03', 'MD9-0102GH', 'MD9-01Lab', 'S1-03CR', 'S11-0204', 'S11-0301', 'S11-0302', 'S11-0401', 'S12-0401', 'S12-0402', 'S12-0403', 'S13-0313', 'S13-M-08', 'S13-M-09', 'S14-04Lab', 'S14-0619', 'S14-0620', 'S15-0622', 'S16-0202', 'S16-0304', 'S16-0307', 'S16-0309', 'S16-03ALR', 'S16-0430', 'S16-0431', 'S16-0433', 'S16-0435', 'S16-0436', 'S16-0437', 'S16-0440', 'S16-05101', 'S16-05102', 'S16-0598', 'S16-06118', 'S16-SPS', 'S17-0302', 'S17-0304', 'S17-0404', 'S17-0405', 'S17-0406', 'S17-0512', 'S17-0611', 'S1A-0217', 'S2-0414', 'S2-0415', 'S3-05CR', 'S4-0103', 'S4-04Lab', 'S4A-01Lab', 'S4A-0308', 'S5-01GEN', 'S5-01PHY', 'S5-0223', 'S5-0224', 'S5-0225', 'S5-0410', 'S8-0203', 'S8-0314', 'S8-0403', 'S9-0513'];
var ENG = ['DSALab', 'E1-04-09PC', 'E1-06-01', 'E1-06-02', 'E1-06-03', 'E1-06-04', 'E1-06-05', 'E1-06-06', 'E1-06-07', 'E1-06-08', 'E1-06-09', 'E1-06-10', 'E1-06-11', 'E1-06-12', 'E1-06-13', 'E1-06-14', 'E1-06-15', 'E1-06-16', 'E1A-0303', 'E1A-04-02', 'E2-03-02', 'E2-03-03', 'E2-03-32', 'E2-0306PC3', 'E2-0307PC4', 'E2-0308PC5', 'E2A-02-02', 'E2A-04-03', 'E3-0519ESP', 'E3-06-01', 'E3-06-02', 'E3-06-03', 'E3-06-04', 'E3-06-05', 'E3-06-06', 'E3-06-07', 'E3-06-08', 'E3-06-09', 'E3-06-10', 'E3-06-11', 'E3-06-12', 'E3-06-13', 'E3-06-14', 'E3-06-15', 'E3A-0502', 'E3A-0503', 'E3A-0504', 'E3A-0507', 'E4-02-01', 'E4-04-02', 'E4-04-03', 'E4-04-04', 'E4-04-07', 'E5-02-32', 'E5-03-19', 'E5-03-20', 'E5-03-21', 'E5-03-22', 'E5-03-23', 'EA-02-11', 'EA-04-27', 'EA-06-02', 'EA-06-03', 'EA-06-04', 'EA-06-05', 'EA-06-06', 'EA-06-07', 'EH-SR', 'EW2-0402', 'LT2', 'LT5', 'LT6', 'LT7', 'LT7A'];
var DUMMY = ['DV-001', 'DV-002', 'DV-003', 'DV-004', 'DV-005', 'DV-008', 'DV-009', 'DV-CMS', 'DV-DMS', 'DV-EMS', 'DV-FMS', 'DV-HMS', 'DV-IMS', 'DV-JMS', 'DV-KMS', 'DV-LMS', 'DV-MMS', 'DV-NMS', 'DV1', 'DV2', 'DigELab', 'E-LAB'];
var LOCS = [SDE, AS, BIZ, UT, OTHER, COM, SCI, ENG];
var adjacency = {};
adjacency[SDE] = [SDE, ENG, DUMMY];
adjacency[AS] = [AS, ENG, COM, DUMMY];
adjacency[BIZ] = [BIZ, COM, DUMMY];
adjacency[UT] = [UT, DUMMY];
adjacency[OTHER] = [DUMMY];
adjacency[COM] = [COM, AS, BIZ, DUMMY];
adjacency[SCI] = [SCI, DUMMY];
adjacency[ENG] = [ENG, SDE, AS];

/* STATE VARIABLES */
var App = {
	addedModules: [],
	addedModuleNames: [],
	generatedSchedules: [],
	generatedScheduleVals: [],
	moduleList: [],
	blockedSlots: []
};

var deferred = $.Deferred();

jQuery(document).ready(function($) {
	// !!!!! TEMP !!!!!!!!
	$.getJSON("json/moduleList.json", function(data) {
		App.moduleList = data;
	});

	// jQuery UI Sortable
	$("#modules_sortable").sortable({
		axis: "y",
		containment: "parent"
	});

	// jQuery UI Slider
	$("#timetable_range_slider").slider({
		range: true,
		min: 0,
		max: TIMETABLE_RANGE * 2,
		step: 1,
		values: [ 0, TIMETABLE_RANGE * 2 ],
		slide: function( event, ui ) {
			if ( ui.values[0] >= ui.values[1] ) return false;

			// var $cells = $(".timetable thead tr.times th");
			// var left_offset = $cells.position().left;
			var total_width = $(".timetable tbody").outerWidth() - $(".timetable tbody td").position().left;
			var cell_width = total_width / (TIMETABLE_RANGE * 2);

			var start = ui.values[0];
			var end = ui.values[1];
			// var start_width = $cells.eq(start).position().left - left_offset;
			// var end_width = end === TIMETABLE_RANGE * 2 ? 0 : total_width - ($cells.eq(end).position().left - left_offset);

			var start_pct = (start / (TIMETABLE_RANGE * 2)) * 100;
			var end_pct = (((TIMETABLE_RANGE * 2) - end) / (TIMETABLE_RANGE * 2)) * 100;
			$(".blockout.start").width(start_pct + '%');
			$(".blockout.end").width(end_pct + '%');
    }
	});

	// Readonly selector
	$("input[readonly], textarea[readonly]").click(function(event) {
		$(this).select();
	});

	// Autocomplete
	$(".module_input").each(autocompleteHandler);
	function autocompleteHandler(index, el) {
		var $input = $(this);
		$input.autoComplete({
			source: function(term, suggest) {
				term = term.toLowerCase();
				choices = App.moduleList;
				var matches = [];

        $.each(choices, function(code, modName) {
        	if (code.toLowerCase().indexOf(term) >= 0) matches.push([code, modName]);
        	else if (modName.toLowerCase().indexOf(term) >= 0) matches.push([code, modName]);
        });

        suggest(matches);
			},
			minChars: 3,
			delay: 3,
			renderItem: function(item, search) {
		    search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		    var str = item[0] + " " + item[1];
		    var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
		    return '<div class="autocomplete-suggestion" data-val="' + item[0] + '">'
		        + str.replace(re, "<b>$1</b>") + '</div>';
			},
			onSelect: function(e, term, item) {
				ModuleUtil.prototype.addModule(term);
				$input.val("");
			}
		});

		$(this).keypress(function(event) {
			var keyCode = event.keyCode || event.which; 
		  if (keyCode === 13) event.preventDefault();
		});
	}

	TimetableUtil.prototype.resetTimetable();
	$(".makeOptimize").click(makeOptimizeClickHandler);
});

/* Event Handlers */
function moduleRemoveClickHandler(event) {
	var modCode = $(event.target).unbind("click").parentsUntil("li").last().parent().attr("data-code");
	ModuleUtil.prototype.removeModule(modCode);
}

function populateScheduleClickHandler(event) {
	var schedule_index = $(event.target).attr("data-index");
	TimetableUtil.prototype.populateSchedule(App.generatedSchedules[schedule_index], App.generatedScheduleVals[schedule_index]);
}

function blockTableCellClickHandler(event) {
	var cellsbefore = $(event.target).prevAll();
	var index = 0;
	cellsbefore.each(function(i, el) {
		if ($(el).is('th')) return true;
		else if (parseInt($(el).prop("colspan")) > 1) index += parseInt($(el).prop("colspan"));
		else index++;
	});

	var rowsbefore = $(event.target).parent().prevAll();
	var day = rowsbefore.length;
	var timeObj = new Time(day, colIndexToTime(index), colIndexToTime(index+1));

	$(event.target).toggleClass('blocked');
	TimetableUtil.prototype.toggleBlockedSlot(timeObj);
}

function makeOptimizeClickHandler(event) {
	getFiveBest();
}

/* Module List Utility Class */
var ModuleUtil = function(){};

ModuleUtil.prototype.getModNameByCode = function(modCode) {
	return App.moduleList[modCode];
};

ModuleUtil.prototype.addModule = function(modCode) {
	var modName = ModuleUtil.prototype.getModNameByCode(modCode);
	App.addedModules.push(modCode);
	App.addedModuleNames.push(modName);
	$("#modules_sortable").append('
		<li class="ui-state-default module_item" data-code="' + modCode + '"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>' + 
		modCode + " " + modName + 
		'<a href="' + modCodeToNUSModsURL(modCode) + '" target="_blank"><i class="fa fa-info-circle"></i></a>' +
		'<a href="javascript:void(0);" class="remove_module"><i class="fa fa-times"></i></a>' +
		'</li>');

	$("a.remove_module").unbind("click").click(moduleRemoveClickHandler);
	$(".modules p.info").hide();
};

ModuleUtil.prototype.removeModule = function(modCode) {
	$.each(App.addedModules, function(index, mod) {
		if (modCode == mod) {
			App.addedModules.splice(index, 1);
			return false;
		}
	});

	$("#modules_sortable .module_item[data-code="+modCode+"]").unbind("click").remove();
	if (App.addedModules.length === 0) $(".modules p.info").show();
};

/* Timetable Utility Class */
var TimetableUtil = function(){};

TimetableUtil.prototype.addBlockedSlot = function(timeObj) {
	if (!timeObj instanceof Time) return false;
	App.blockedSlots.push(timeObj);
};

TimetableUtil.prototype.removeBlockedSlot = function(timeObj) {
	if (!timeObj instanceof Time) return false;

	$.each(App.blockedSlots, function(index, blockedTimeObj) {
		if (blockedTimeObj.day === timeObj.day && blockedTimeObj.start === timeObj.start && blockedTimeObj.end === timeObj.end) App.blockedSlots.splice(index, 1);
	});
};

TimetableUtil.prototype.toggleBlockedSlot = function(timeObj) {
	if (!timeObj instanceof Time) return false;
	var slotFound = false;

	$.each(App.blockedSlots, function(index, blockedTimeObj) {
		if (blockedTimeObj.day === timeObj.day && blockedTimeObj.start === timeObj.start && blockedTimeObj.end === timeObj.end) {
			App.blockedSlots.splice(index, 1);
			slotFound = true;
			return false;
		}
	});

	if (!slotFound) App.blockedSlots.push(timeObj);
};

// Add schedule to generatedSchedules
TimetableUtil.prototype.addSchedule = function(schedule, schedVals) {
	App.generatedSchedules.push(schedule);
	App.generatedScheduleVals.push(schedVals);

	var html = "";
	for (var i = 0; i < App.generatedSchedules.length; i++) {
		html += '<li><a href="javascript:void(0);" data-index="'+i+'">Schedule '+(i+1)+'</a></li>';
	}

	$(".available_schedules").html(html);
	$(".available_schedules li a").unbind("click").click(populateScheduleClickHandler);
};

TimetableUtil.prototype.clearSchedules = function() {
	App.generatedSchedules = [];
	$(".available_schedules").html("");
};

TimetableUtil.prototype.resetTimetable = function() {
	var $timetableBody = $(".timetable tbody");
	var html = "";

	for (var i = 0; i < TIMETABLE_DAYS_SHOWN; i++) {
		html += "<tr>";
		html += '<th class="day_label">' + DAYS_OF_WEEK[i] + '</th>';
		for (var j = 0; j < TIMETABLE_RANGE; j++) html += "<td></td><td></td>";
		html += "</tr>";
	}

	$timetableBody.html(html);
};

// Populate timetable with Schedule data.
TimetableUtil.prototype.populateSchedule = function(schedule, schedVal) {
	TimetableUtil.prototype.resetTimetable();
	$(".timetable tbody td").unbind("click").click(blockTableCellClickHandler);

	$.each(schedule.courses, function(index, course) {
		$.each(course.activities, function(index, activity) {
			var slot = activity.slots[activity.curSlot];
			TimetableUtil.prototype.addSlot(course, activity.name, slot);
		});
	});

	$(".statistics .free_day").width(toPercent(schedVal[1]));
	$(".statistics .breaks").width(toPercent(schedVal[2]));
	$(".statistics .startend_time").width(toPercent(schedVal[3]));
	$(".statistics .travel").width(toPercent(schedVal[4]));
};

// Add all timings for Slot into timetable. Each timing is one Block.
TimetableUtil.prototype.addSlot = function(course, actName, slot) {
	$.each(slot.timings, function(index, timing) {
		TimetableUtil.prototype.addBlock(course, actName, slot.code, timing);
	});
};

// Adds block to timetable, 
TimetableUtil.prototype.addBlock = function(course, actName, slotCode, timeObj) {
	var $timetableBody = $(".timetable tbody");
	var startIndex = timeToColIndex(timeObj.start);
	var endIndex = timeToColIndex(timeObj.end);
	var duration = endIndex - startIndex;

	var $dayRow = $timetableBody.find("tr").eq(dayToRowIndex(timeObj.day));
	var $cell = getCellInRow($dayRow, startIndex);
	var blockHTML = makeBlock(course, actName, slotCode, timeObj, getPaletteIndex(course.modCode));

	$cell.html(blockHTML);

	var cellsToRemove = [];
	for (var i = startIndex + 1; i < endIndex; i++) {
		var $toremove = getCellInRow($dayRow, i);
		if ($toremove) cellsToRemove.push($toremove);
	}

	$.each(cellsToRemove, function(index, el) {
		$(el).remove();
	});

	$cell.prop("colspan", duration);
};

function getCellInRow($row, index) {
	var counter = 0;
	var $cell = null;

	$row.find("td").each(function(i, el) {
		if (counter == index) {
			$cell = $(el);
			return false;
		}

		if (parseInt($(this).prop("colspan")) > 1) counter += parseInt($(this).prop("colspan"));
		else counter++;
	});
	return $cell;
}

// Gets the palette index by module code. Basically it's the ranking of the mod
function getPaletteIndex(modCode) {
	return App.addedModules.indexOf(modCode);
}

/* HELPER FUNCTIONS */

function dayToRowIndex(day) {
	return day;
}

// 800 = 0, 830 = 1, 900 = 2, ..., 
function timeToColIndex(time) {
	var halfHr = (time % 100) / 30;
	return (Math.floor(time / 100) - START_TIME_HR) * 2 + halfHr;
}

function colIndexToTime(index) {
	var halfHr = index % 2;
	return (Math.floor(index/2) + START_TIME_HR) * 100 + halfHr * 30;
}

function actNameGetAbbr(actName) {
	var replacements = {
		"Laboratory": "LAB",
		"Tutorial": "TUT",
		"Lecture": "LEC",
		"Sectional Teaching": "SEC",
		"Seminar": "SEM",
		"Recitation": "REC"
	};

	return replacements[actName];
}

// Returns HTML for a block
function makeBlock(course, actName, slotCode, timeObj, paletteIndex) {
	// Avoid DOM manipulation, we will do it by HTML strings instead.

	var html = '<div class="lesson_block palette-' + paletteIndex + '" data-starttime="' + timeObj.start + '" data-endtime="' + timeObj.end + '" data-code="' + course.modCode + '" data-slotcode="' + slotCode + '" data-activity="' + actNameGetAbbr(actName) + '">
	<span class="code">' + course.modCode + ' </span>
	<span class="activity_code">' + actNameGetAbbr(actName) + ' [' + slotCode + ']' + ' </span>
	<span class="venue">' + timeObj.place + '</span>';

	if (isArray(timeObj.week)) html += '<span class="weeks">Weeks ' + timeObj.join(',') + '</span>';
	else if (isNumber(timeObj.week) && timeObj.week > 0) html += '<span class="weeks">' + (timeObj === 1 ? 'Odd' : 'Even') + ' Week</span>';

	html += '</div>';

	return html;
}

function modCodeToNUSModsURL(code) {
	return "https://nusmods.com/modules/" + code;
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isArray(n) {
	return n instanceof Array;
}

function toPercent(n) {
	return n * 100 + "%";
}














/* CLASS DECLARATIONS */

function Schedule() {
	this.courses = [];
	this.blocked = [];
}
Schedule.prototype.addCourse = function(course) {
	this.courses.push(course);
}

// returns true if there's overlap
// @param courses - array of Course
// @param blocked - array of Time that is blocked off
// @param newCourse to check if overlap
Schedule.prototype.overlap = function (newCourse) {
	for (var i = 0; i < this.blocked.length; i++) {
		if (newCourse.overlapTime(this.blocked[i])) {
			return true;
		}
	}
	for (var i = 0; i < this.courses.length; i++) {
		if (this.courses[i].modCode == "CS2020" && this.courses[i].activities[0].curSlot == 0 &&
			newCourse.modCode == "ST2131" && newCourse.activities[1].curSlot == 15) {
			//console.log("!");
			//console.log(newCourse.overlap(this.courses[i]));
		}
		if (newCourse.overlap(this.courses[i])) {
			return true;
		}
	}
	return false;
}
Schedule.prototype.clone = function() {
	var ret = new Schedule();
	ret.courses = [];
	for (var i = 0; i < this.courses.length; i++) {
		ret.courses.push(this.courses[i].clone());
	}
	ret.blocked = this.blocked;
	return ret;
}


function loadCourseFromJSON(name, code, data) {
	var ret = new Course();
	ret.modName = name;
	ret.modCode = code;
	ret.activities = [];
	for(var i = 0; i < data.length; i++){
		var added = false;
		for (var j = 0; j < ret.activities.length; j++) {
			if (ret.activities[j].name == data[i]["LessonType"]){
				ret.activities[j].addSlot(data[i]);
				added = true;
				break;
			}
		}
		if (!added) {
			ret.activities.push(new Activity(data[i]["LessonType"]));
			ret.activities[ret.activities.length - 1].addSlot(data[i]);
		}
	}
	return ret;
}

function Course() {
	this.modName = "";
	this.modCode = "";
	this.activities = [];
}

Course.prototype.hasNextSlot = function() {
	for (var i = 0; i < this.activities.length; i++) {
		if (this.activities[i].hasNextSlot()) {
			return true;
		}
	}
}
Course.prototype.nextSlot = function() {
	for (var i = 0; i < this.activities.length; i++) {
		if (this.activities[i].nextSlot()) {
			for (var j = 0; j < i; j++) {
				this.activities[j].reset();
			}
			return true;
		}
	}
}
Course.prototype.overlap = function(toCheck) { // toCheck as Course
	for (var i = 0; i < this.activities.length; i++) {
		for (var j = 0; j < toCheck.activities.length; j++) {
			if (this.activities[i].overlap(toCheck.activities[j])) {
				return true;
			}
		}
	}
	return false;
}
Course.prototype.overlapTime = function(toCheck) { // toCheck as Time
	for (var i = 0; i < this.activities.length; i++) {
		if (this.activities[i].overlapTime(toCheck)) {
			return true;
		}
	}
	return false;
}
Course.prototype.clone = function() {
	var ret = new Course();
	ret.modName = this.modName;
	ret.modCode = this.modCode;
	ret.activities = [];
	for (var i = 0; i < this.activities.length; i++) {
		ret.activities.push(this.activities[i].clone());
	}
	return ret;
}
Course.prototype.reset = function() {
	for (var i = 0; i < this.activities.length; i++) {
		this.activities[i].reset();
	}
}

function Activity(name) {
	this.name = name;
	this.slots = [];
	this.curSlot = 0;
}

Activity.prototype.addSlot = function(obj) {
	for(var i = 0; i < this.slots.length; i++){
		if(this.slots[i].code == obj["ClassNo"]){
			this.slots[i].addTiming(obj);
			return;
		}
	}
	this.slots.push(new Slot(obj["ClassNo"]));
	this.slots[this.slots.length - 1].addTiming(obj);
}

Activity.prototype.hasNextSlot = function() {
	return this.curSlot < this.slots.length - 1;
}
Activity.prototype.nextSlot = function() {
	if (this.curSlot >= this.slots.length - 1) {
		return false;
	}
	++this.curSlot;
	return true;
}
Activity.prototype.overlap = function(toCheck) { // toCheck as Activity
	return this.slots[this.curSlot].overlap(toCheck.slots[toCheck.curSlot]);
}
Activity.prototype.overlapTime = function(toCheck) { // toCheck as Time
	return this.slots[this.curSlot].overlapTime(toCheck);
}
Activity.prototype.clone = function() {
	var ret = new Activity(this.name);
	ret.slots = this.slots;
	ret.curSlot = this.curSlot;
	return ret;
}
Activity.prototype.reset = function() {
	this.curSlot = 0;
}

function Slot(code) {
	this.code = code;
	this.timings = [];
}

var days = {
	"Monday" : 0,
	"Tuesday" : 1,
	"Wednesday" : 2,
	"Thursday" : 3,
	"Friday" : 4,
	"Saturday" : 5,
	"Sunday" : 6
};

var weeks = {
	"Every Week" : 0,
	"Odd Week" : 1,
	"Even Week" : 2
};
Slot.prototype.addTiming = function(obj){
	this.timings.push(new Time(days[obj["DayText"]], parseInt(obj["StartTime"]), parseInt(obj["EndTime"]), obj["Venue"], weeks[obj["WeekText"]]));
}

Slot.prototype.overlap = function(toCheck) {
	for (var i = 0; i < this.timings.length; i++) {
		for (var j = 0; j < toCheck.timings.length; j++) {
			if (this.timings[i].overlap(toCheck.timings[j])) {
				return true;
			}
		}
	}
	return false;
}
Slot.prototype.overlapTime = function(toCheck) {
	for (var i = 0; i < this.timings.length; i++) {
		if (this.timings[i].overlap(toCheck)) {
			return true;
		}
	}
	return false;
}

// Time
// @param day - Stores 0, 1, 2, 3, 4, 5, 6 to store sun, mon, tues, wed, thurs, fri, sat respectively
// @param start - start time in 24 hour time
// @param end - end time in 24 hour time
// @param week - stores the mode of the week. 0 = all weeks, 1 = odd weeks, 2 = even weeks, else if array = array of weeks used
// Stores day/time/place/week
function Time(day, start, end, place, week) {
	this.day = day;
	this.start = start;
	this.end = end;
	this.place = place
	this.week = week;
}

Time.prototype.overlap = function(toCheck) {
	if (this.day != toCheck.day) { // diff days
		return false;
	} else if (this.end <= toCheck.start ||
				this.start >= toCheck.end) { // diff timings
		return false;
	} else { // diff weeks
		return this.overlapWeek(toCheck);
	}
}

Time.prototype.overlapWeek = function(toCheck){
	if (this.week == 0 || toCheck.week == 0) { // Either takes all weeks
		return true;
	} else if ((this.week == 1 || this.week == 2) &&
			   (toCheck.week == 1 || toCheck.week == 2)) { // Even/odd weeks
		return this.week == toCheck.week;
	} else if (	Object.prototype.toString.call(this.week   ) === '[object Array]' &&
				Object.prototype.toString.call(toCheck.week) === '[object Array]') {
		for (var i = 0; i < this.week.length; i++) {
			if (toCheck.week.indexOf(this.week[i] != -1)) {
				return true;
			}
		}
		return false;
	} else if (	Object.prototype.toString.call(this.week   ) === '[object Array]' ||
				Object.prototype.toString.call(toCheck.week) === '[object Array]') {
		var weeks;
		var parity;
		if (Object.prototype.toString.call(this.week) === '[object Array]') { // toCheck.week = 1 or 2
			weeks = this.week;
			parity = toCheck.week % 2;
		} else { // this.week = 1 or 2
			weeks = toCheck.week;
			parity = this.week % 2;
		}
		for (var i = 0; i < weeks.length; i++) {
			if (weeks[i] % 2 == parity) {
				return true;
			}
		}
		return false;
	}
}
Time.prototype.asString = function() {
	return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][this.day] + " (" + this.start + "-" + this.end + ")";
	
};

// optimizes timetable
// @param mod - array of module codes (string)
// @param blocked - array of time blocked off
// @return a list of schedules
function optimize(moduleCodes, blocked, cb) {
	var ajaxRequests = [];
	var mod = [];

	for (var i = 0; i < moduleCodes.length; i++) ajaxRequests.push(loadModData(moduleCodes[i]));
	$.when.apply($, ajaxRequests).done(function() {
		var modsAssigned = 0;
		var requests = arguments;
		for (var i = 0; i < moduleCodes.length ; i++) {
			mod[i] = loadCourseFromJSON(App.moduleList[moduleCodes[i]], moduleCodes[i], requests[i][0]);
		}
		
		var tempSchd = new Schedule();
		tempSchd.blocked = blocked;
		var solns = [tempSchd];
		while (modsAssigned < mod.length) {
			var curCourse = mod[modsAssigned];
			var prevSolns = solns;
			solns = [];
			var failSolns = []; // in case the new module cannot be added at all
			for (var i = 0; i < prevSolns.length; i++) {
				curCourse.reset();
				var added = false;
				var counter = 0;
				while (true) {
					if (!prevSolns[i].overlap(curCourse)) {
						var temp = prevSolns[i].clone();
						temp.addCourse(curCourse.clone());
						solns.push(temp);
						added = true;
					}
					if (curCourse.hasNextSlot()) {
						curCourse.nextSlot();
					} else { break; }
				}
				if (!added) {
					failSolns.push(prevSolns[i]);
				}
			}
			if (solns.length == 0) { // current mod just cannot be added
				solns = failSolns;
			}
			console.log("solns.length");
			console.log(solns.length);
			if (solns.length > 5000) {
				solns = shuffle(solns).slice(-5000);
			}
			++modsAssigned;
		}
		cb(solns);
	});
}

function shuffle(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		var index = Math.floor(Math.random() * (i + 1));
		if (index != i) {
			var temp = arr[index];
			arr[index] = arr[i];
			arr[i] = temp;
		}
	}
	return arr;
}

var modCache = {};

// Passes the Course object through Promises
function loadModData(code) {
	// if (modCache.hasOwnProperty(code)) return ;

	return $.getJSON("http://api.nusmods.com/2015-2016/2/modules/" + code.toUpperCase() + "/timetable.json")
	.fail(function(d) {
		alert("Incorrect code");
	});
}

function showStringify(data) {
	console.log(JSON.stringify(data));
}

function enterModData() {
	loadModData(document.getElementById("modulecode").value);
}

/*function genDisplayTest(cb) {
	var schd = new Schedule();
	var mods = ["CS2020", "CS2100", "MA1101R", "ST2131", "GER1000", "CFG1010"];
	var ajaxRequests = [];
	for (var i = 0; i < mods.length; i++) {
		ajaxRequests.push(loadModData(mods[i]));
	}

	$.when.apply($, ajaxRequests).done(function() {
		var requests = arguments;
		for(var i=0;i<requests.length;i++) {
			var code = mods[i];
			var temp = loadCourseFromJSON(moduleNames[code], code, requests[i][0]);
			switch (temp.modCode) {
				case "CS2020": {
					for (var j = 0; j < temp.activities.length; j++) {
						temp.activities[j].curSlot = 0;
					}
				} break;
				case "CS2100": {
					for (var j = 0; j < temp.activities.length; j++) {
						switch (temp.activities[j].name) {
							case "Lecture": { temp.activities[j].curSlot = 0;} break;
							case "Laboratory": { temp.activities[j].curSlot = 10;} break;
							case "Tutorial": { temp.activities[j].curSlot = 4;} break;
						}
					}
				} break;
				case "MA1101R": {
					for (var j = 0; j < temp.activities.length; j++) {
						switch (temp.activities[j].name) {
							case "Lecture": { temp.activities[j].curSlot = 0;} break;
							case "Laboratory": { temp.activities[j].curSlot = 4;} break;
							case "Tutorial": { temp.activities[j].curSlot = 2;} break;
						}
					}
				} break;
				case "ST2131": {
					for (var j = 0; j < temp.activities.length; j++) {
						switch (temp.activities[j].name) {
							case "Lecture": { temp.activities[j].curSlot = 1;} break;
							case "Tutorial": { temp.activities[j].curSlot = 8;} break;
						}
					}
				} break;
				case "GER1000": {
					for (var j = 0; j < temp.activities.length; j++) {
						temp.activities[j].curSlot = 38;
					}
				} break;
				case "CFG1010": {
					for (var j = 0; j < temp.activities.length; j++) {
						temp.activities[j].curSlot = 7;
					}
				} break;
			}
			schd.courses.push(temp);
		}
		
		console.log(schd);
		cb(schd);
	});
	
}*/

var x;
function test1(mod) {
	mod = "CS2020";
	loadModData(mod).done(function(ret) { x = loadCourseFromJSON(App.moduleList[mod], mod, ret); });
	//console.log(x);
}

function test2() {
	var slot = "";
	for (var i = 0; i < x.activities.length; i++) {
		console.log(x.activities[i]);
		slot += " : " + (x.activities[i].curSlot + 1) +
				"/" + x.activities[i].slots.length;
	}
	console.log(slot);
	if (x.hasNextSlot()) {
		console.log("NEXT!");
		x.nextSlot();
	} else {
		console.log("NO MORE!");
	}
}

function optimizeChosenMods(callback) {
	var ajaxRequests = [];
	for (var i = 0; i < App.addedModules.length; i++) ajaxRequests.push(loadModData(App.addedModules[i]));
	$.when.apply($, ajaxRequests).done(function() {
		optimize(App.addedModules, App.blockedSlots, function(schds) {
			callback(schds);
		});
	});
}

function getFiveBest() {
	TimetableUtil.prototype.clearSchedules();
	optimizeChosenMods(function(schds) {
		var schedValues = [];
		for (var i = 0; i < schds.length; i++) schedValues[i] = getScheduleVal(schds[i])[0];

		for (var i = 0; i < 5 && schds.length > 0; i++) {
			var currMax = [-1, -Infinity];
			for (var j = 0; j < schedValues.length; j++) {
				if (schedValues[j] > currMax[1]) currMax = [j, schedValues[j]];
			}

			var best_schedule = schds[currMax[0]];
			var best_values = getScheduleVal(best_schedule);
  		TimetableUtil.prototype.addSchedule(best_schedule, best_values);

			schedValues.splice(currMax[0], 1);
			schds.splice(currMax[0], 1);
		}

		TimetableUtil.prototype.populateSchedule(App.generatedSchedules[0], App.generatedScheduleVals[0]);
		App.blockedSlots = []; // reset
  });
}

function genDisplayTest(cb) {
	var schd = new Schedule();
	var mods = ["CS2020", "CS2100", "MA1101R", "ST2131", "GER1000", "CFG1010"];
	var ajaxRequests = [];
	for (var i = 0; i < mods.length; i++) {
		ajaxRequests.push(loadModData(mods[i]));
	}

	$.when.apply($, ajaxRequests).done(function() {
		optimize(mods, [], function(schds) {
			cb(schds);
		});
	});
	
}

function getTimeDiff(t1, t2){
	return ((Math.floor(t2 / 100) * 60 + t2 % 100) - (Math.floor(t1 / 100) * 60 + t1 % 100)) / 30;
}

function getLoc(loc){
	for(var i = 0; i < LOCS.length; i++){
		if(LOCS[i].indexOf(loc) != -1){
			return LOCS[i]
		}
	}
}

function getScheduleVal(sched){
	var arr = [];
	for(var i = 0; i < sched.courses.length; i++){
		for(var j = 0; j < sched.courses[i].activities.length; j++){
			var activity = sched.courses[i].activities[j];
			var slot = activity.slots[activity.curSlot];
			for(var k = 0; k < slot.timings.length; k++){
				arr.push(slot.timings[k]);
			}
		}
	}
	arr.sort(function(period1, period2){
		return 2400 * (period1.day - period2.day) + (period1.start - period2.start);
	});
	var day = -1;
	var dayStarted = false;
	var lastPeriod = [-1, 0, DUMMY];
	var cumuTime = 0;
	var dayTime = 0;
	var dayStart = 0;
	var score = 0;
	var freeDayScore = 0;
	var breakScore = 0;
	var dayScore = 0;
	var adjacencyScore = 0;
	//console.log(arr);
	for(var i = 0; i < arr.length; i++){
		var p = arr[i];
		if(p.day != day){
			day = p.day;
			dayScore -= Math.pow(getTimeDiff(dayTime, dayStart), 2);
			// console.log("DayTime -" + (Math.pow(getTimeDiff(dayTime, dayStart), 2)));
			dayTime = 0;
			dayStart = p.start;
			freeDayScore -= 1000;
			// console.log("Day -30");
		}
		var loc = getLoc(p.place);
		if(p.day != lastPeriod[0] || p.start != lastPeriod[1]){
			cumuTime = 0;
		}else{
			console.log(loc);
			if(adjacency[loc].indexOf(lastPeriod[2]) == -1){
				adjacencyScore -= 500;
				// console.log("Adjacency -500");
			}
		}
		var s = Math.pow(cumuTime, 3);
		breakScore += Math.pow(cumuTime, 3);
		cumuTime += getTimeDiff(p.start, p.end);
		s -= Math.pow(cumuTime, 3);
		breakScore -= Math.pow(cumuTime, 3);
		// console.log("Cumu " + s);
		dayTime = p.end;
		lastPeriod = [p.day, p.end, loc];
	}
	
	dayScore -= Math.pow(getTimeDiff(dayTime, dayStart), 2);
	// console.log("DayTime -" + (Math.pow(getTimeDiff(dayTime, dayStart), 2)));
	var score = freeDayScore + breakScore + dayScore + adjacencyScore;
	// console.log(freeDayScore);
	// console.log(breakScore);
	// console.log(dayScore);
	// console.log(adjacencyScore);
	// console.log(score);
	var weightedSum = breakScore + dayScore + adjacencyScore;
	breakScore = 1 - breakScore / weightedSum;
	adjacencyScore = 1 - adjacencyScore / weightedSum;
	dayScore = 1 - dayScore / weightedSum;
	var f = 0;
	if(freeDayScore == -4000){
		f = 0.5;
	}else if(freeDayScore > -4000){
		f = 1;
	}
	return [score, f, breakScore, dayScore, adjacencyScore];
}