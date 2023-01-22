import { useEffect, useState } from 'react';
import Styles from './colorPicker.module.css';

export default function ColorPicker(props) {
	const [selectedColor, setSelectedColor] = useState('000');

	useEffect(() => {
		var colorStrip = document.getElementById('color-strip');
		var context1 = colorStrip.getContext('2d');
		var width1 = colorStrip.width;
		var height1 = colorStrip.height;
		var colorBlock = document.getElementById('color-block');
		var context2 = colorBlock.getContext('2d');
		var width2 = colorBlock.width;
		var height2 = colorBlock.height;
		var x = 0;
		var y = 0;
		var drag = false;
		var rgbaColor = 'rgba(255, 255, 0, 1)';

		context1.rect(0, 0, width1, height1);
		
		fillGradient();

		context2.rect(0, 0, width2, height2);
		
		var grd1 = context2.createLinearGradient(0, 0, 0, height1);
			grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
			grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
			grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
			grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
			grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
			grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
			grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
			
			context2.fillStyle = grd1;
			context2.fill();

		var gradient = context2.createLinearGradient(0, 0, 150 + Math.cos(0), Math.sin(0));
			gradient.addColorStop(0,   "rgba(255, 255, 255, 0.8)");
			gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
			
			context2.fillStyle = gradient;
			context2.fill();

		function click(e) {
			x = e.offsetX;
			y = e.offsetY;
			
			var imageData = context2.getImageData(x, y, 1, 1).data;
			
			rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
			
			fillGradient();
			props.setColor(`#${rgbToHex(imageData[0], imageData[1], imageData[2]).toUpperCase()}`);
			setSelectedColor(`#${rgbToHex(imageData[0], imageData[1], imageData[2]).toUpperCase()}`);
		}

		function fillGradient() {
			context1.fillStyle = rgbaColor;
			context1.fillRect(0, 0, width1, height1);

		var grdWhite = context2.createLinearGradient(0, 0, width1, 0);
			grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
			grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
			context1.fillStyle = grdWhite;
			context1.fillRect(0, 0, width1, height1);

		var grdBlack = context2.createLinearGradient(0, 0, 0, height1);
			grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
			grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
			context1.fillStyle = grdBlack;
			context1.fillRect(0, 0, width1, height1);
		}

		function mousedown(e) {
			drag = true;
			
			changeColor(e);
		}

		function mousemove(e) {
			if (drag) {
				changeColor(e);
			}
		}

		function mouseup(e) {
			drag = false;
		}

		function changeColor(e) {
			x = e.offsetX;
			y = e.offsetY;
			
			var imageData = context1.getImageData(x, y, 1, 1).data;
			
			rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
		}

		colorBlock.addEventListener("click", click, false);
		colorStrip.addEventListener("click", (e) => {
			x = e.offsetX;
			y = e.offsetY;
			
			var imageData = context1.getImageData(x, y, 1, 1).data;
			
			rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';

			props.setColor(`#${rgbToHex(imageData[0], imageData[1], imageData[2]).toUpperCase()}`);
			setSelectedColor(`#${rgbToHex(imageData[0], imageData[1], imageData[2]).toUpperCase()}`);
		}, false);

		colorBlock.addEventListener("mousedown", mousedown, false);
		colorBlock.addEventListener("mouseup", mouseup, false);
		colorBlock.addEventListener("mousemove", mousemove, false);
	});

	function rgbToHex(r, g, b) {
		if (r > 255 || g > 255 || b > 255)
			throw 'Invalid color component';
		
		return ((r << 16) | (g << 8) | b).toString(16);
	}

  return (
    <div className={Styles.colorPickerContainer} onClick={(e) => {
			e.stopPropagation();
		}}>
			<div className={Styles.colorOptionsContainer}>
				<div className={Styles.colorsRow}>
					{ ['#000000', '#626B81', '#9499A5', '#B4B8C1', '#E7E8EB', '#FFFFFF'].map(color => <div onClick={() => setSelectedColor(color)} className={Styles.colorOption} style={{ background: `${color}` }} />) }
				</div>
				<div className={Styles.colorsRow}>
					{ ['#00C2FF', '#34CEFF', '#6248FF', '#8F76FF', '#FF9F1A', '#F2D600', '#FF3477', '#FF34EB'].map(color => <div onClick={() => setSelectedColor(color)} className={Styles.colorOption} style={{ background: `${color}` }} />) }
				</div>
				<div className={Styles.colorsRow}>
					{ ['#00AAAF', '#27E1BF', '#FF9900', '#FFFF00', '#00FF00', '#00FFFF', '#4A86E8', '#0000FF'].map(color => <div onClick={() => setSelectedColor(color)} className={Styles.colorOption} style={{ background: `${color}` }} />) }
				</div>
				<div className={Styles.colorsRow}>
					{ ['#00AAAF', '#27E1BF', '#FF9900', '#FFFF00', '#00FF00', '#00FFFF', '#4A86E8', '#0000FF'].reverse().map(color => <div onClick={() => setSelectedColor(color)} className={Styles.colorOption} style={{ background: `${color}` }} />) }
				</div>
				<div className={Styles.colorsRow}>
					{ ['#00C2FF', '#34CEFF', '#6248FF', '#8F76FF', '#FF9F1A', '#F2D600', '#FF3477', '#FF34EB'].reverse().map(color => <div onClick={() => setSelectedColor(color)} className={Styles.colorOption} style={{ background: `${color}` }} />) }
				</div>
			</div>
			<div>
				<div onClick={(e) => {
					e.stopPropagation();
				}} className={Styles.colorPicker}>
					<canvas className={Styles.colorBlock} id="color-block" height="150" width="150"></canvas>
					<canvas className={Styles.colorStrip} id="color-strip" height="150" width="30"></canvas>
				</div>
				<div className={Styles.selectedColorContainer}>
					<div className={Styles.selectedColorBlock} style={{ background: selectedColor }} />
					<input type="text" disabled value={selectedColor} />
				</div>
				<div className={Styles.buttonsContainer}>
					<button onClick={() => props.closeMenu()}>Cancel</button>
					<button onClick={() => props.closeMenu(selectedColor)}>Save</button>
				</div>
			</div>
    </div>
  )
}
