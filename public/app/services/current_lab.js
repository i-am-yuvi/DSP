function dsp_currentLab()  { 

this.currentLab = {};
this.noImages;
this.editVisible;



this.resetLab = function resetLab() {
	this.currentLab.name = '';
	this.currentLab.repoName = '';
}


this.updateLab= function updateLab(repoName, labName) {
		this.currentLab.name = labName;
		this.currentLab.repoName = repoName;
}

}
