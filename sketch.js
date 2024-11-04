function setup() {
  createCanvas(windowWidth, windowHeight);
GazeCloudAPI.StartEyeTracking();
GazeRecorderAPI.Rec(); 
GazeCloudAPI.StopEyeTracking();
  GazeCloudAPI.UseClickRecalibration = true;
  GazeCloudAPI.OnResult = function (GazeData) {
                if (GazeData.state === 0) { // Valid gaze data
                    gazeX = GazeData.docX;
                    gazeY = GazeData.docY;
                }
            };

}
GazeCloudAPI.OnCalibrationComplete =function(){ console.log(‘gaze Calibration Complete’) }
GazeCloudAPI.OnCamDenied = function() {
                console.log('Camera access denied');
            };

            GazeCloudAPI.OnError = function(msg) {
                console.log('Error: ' + msg);
            };
        

function draw() {
  background(220);
}
