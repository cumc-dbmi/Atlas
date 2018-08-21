define(function (require, exports) {

    var ko = require('knockout');

	function CreateStudyPopulationArgs(data) {
		var self = this;
        data = data || {};

        self.binary = ko.observable(data.binary || true);
        self.includeAllOutcomes = ko.observable(data.includeAllOutcomes || true);
        self.firstExposureOnly = ko.observable(data.firstExposureOnly || false);
        self.washoutPeriod = ko.observable(data.washoutPeriod || 0);
        self.removeSubjectsWithPriorOutcome = ko.observable(data.removeSubjectsWithPriorOutcome || false);
        self.priorOutcomeLookback = ko.observable(data.priorOutcomeLookback || 99999);
        self.requireTimeAtRisk = ko.observable(data.requireTimeAtRisk || true);
        self.minTimeAtRisk = ko.observable(data.minTimeAtRisk || 1);
        self.riskWindowStart = ko.observable(data.riskWindowStart || 0);
        self.addExposureDaysToStart = ko.observable(data.addExposureDaysToStart || false);
        self.riskWindowEnd = ko.observable(data.riskWindowEnd || 0);
        self.addExposureDaysToEnd = ko.observable(data.addExposureDaysToEnd || true);
        self.attr_class = data.attr_class || "args";
	}
	
	return CreateStudyPopulationArgs;
});