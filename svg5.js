const svg5 = {
    fillColor: 'white',
    strokeColor: 'black',
    strokeWeight: 1,
    strokeCap: 'butt', // butt, square or round
    strokeJoin: 'miter', // miter, round or bevel
    opacity: 1,
    transform: '',
    path: [],
    sn: (() => {
        /*! simplex-noise.js: copyright 2012 Jonas Wagner, licensed under a MIT license. See https://github.com/jwagner/simplex-noise.js for details */
        !function(){"use strict";function SimplexNoise(random){random||(random=Math.random),this.p=new Uint8Array(256),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var i=0;256>i;i++)this.p[i]=256*random();for(i=0;512>i;i++)this.perm[i]=this.p[255&i],this.permMod12[i]=this.perm[i]%12}var F2=.5*(Math.sqrt(3)-1),G2=(3-Math.sqrt(3))/6,F3=1/3,G3=1/6,F4=(Math.sqrt(5)-1)/4,G4=(5-Math.sqrt(5))/20;SimplexNoise.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(xin,yin){var i1,j1,permMod12=this.permMod12,perm=this.perm,grad3=this.grad3,n0=0,n1=0,n2=0,s=(xin+yin)*F2,i=Math.floor(xin+s),j=Math.floor(yin+s),t=(i+j)*G2,X0=i-t,Y0=j-t,x0=xin-X0,y0=yin-Y0;x0>y0?(i1=1,j1=0):(i1=0,j1=1);var x1=x0-i1+G2,y1=y0-j1+G2,x2=x0-1+2*G2,y2=y0-1+2*G2,ii=255&i,jj=255&j,t0=.5-x0*x0-y0*y0;if(t0>=0){var gi0=3*permMod12[ii+perm[jj]];t0*=t0,n0=t0*t0*(grad3[gi0]*x0+grad3[gi0+1]*y0)}var t1=.5-x1*x1-y1*y1;if(t1>=0){var gi1=3*permMod12[ii+i1+perm[jj+j1]];t1*=t1,n1=t1*t1*(grad3[gi1]*x1+grad3[gi1+1]*y1)}var t2=.5-x2*x2-y2*y2;if(t2>=0){var gi2=3*permMod12[ii+1+perm[jj+1]];t2*=t2,n2=t2*t2*(grad3[gi2]*x2+grad3[gi2+1]*y2)}return 70*(n0+n1+n2)},noise3D:function(xin,yin,zin){var n0,n1,n2,n3,i1,j1,k1,i2,j2,k2,permMod12=this.permMod12,perm=this.perm,grad3=this.grad3,s=(xin+yin+zin)*F3,i=Math.floor(xin+s),j=Math.floor(yin+s),k=Math.floor(zin+s),t=(i+j+k)*G3,X0=i-t,Y0=j-t,Z0=k-t,x0=xin-X0,y0=yin-Y0,z0=zin-Z0;x0>=y0?y0>=z0?(i1=1,j1=0,k1=0,i2=1,j2=1,k2=0):x0>=z0?(i1=1,j1=0,k1=0,i2=1,j2=0,k2=1):(i1=0,j1=0,k1=1,i2=1,j2=0,k2=1):z0>y0?(i1=0,j1=0,k1=1,i2=0,j2=1,k2=1):z0>x0?(i1=0,j1=1,k1=0,i2=0,j2=1,k2=1):(i1=0,j1=1,k1=0,i2=1,j2=1,k2=0);var x1=x0-i1+G3,y1=y0-j1+G3,z1=z0-k1+G3,x2=x0-i2+2*G3,y2=y0-j2+2*G3,z2=z0-k2+2*G3,x3=x0-1+3*G3,y3=y0-1+3*G3,z3=z0-1+3*G3,ii=255&i,jj=255&j,kk=255&k,t0=.6-x0*x0-y0*y0-z0*z0;if(0>t0)n0=0;else{var gi0=3*permMod12[ii+perm[jj+perm[kk]]];t0*=t0,n0=t0*t0*(grad3[gi0]*x0+grad3[gi0+1]*y0+grad3[gi0+2]*z0)}var t1=.6-x1*x1-y1*y1-z1*z1;if(0>t1)n1=0;else{var gi1=3*permMod12[ii+i1+perm[jj+j1+perm[kk+k1]]];t1*=t1,n1=t1*t1*(grad3[gi1]*x1+grad3[gi1+1]*y1+grad3[gi1+2]*z1)}var t2=.6-x2*x2-y2*y2-z2*z2;if(0>t2)n2=0;else{var gi2=3*permMod12[ii+i2+perm[jj+j2+perm[kk+k2]]];t2*=t2,n2=t2*t2*(grad3[gi2]*x2+grad3[gi2+1]*y2+grad3[gi2+2]*z2)}var t3=.6-x3*x3-y3*y3-z3*z3;if(0>t3)n3=0;else{var gi3=3*permMod12[ii+1+perm[jj+1+perm[kk+1]]];t3*=t3,n3=t3*t3*(grad3[gi3]*x3+grad3[gi3+1]*y3+grad3[gi3+2]*z3)}return 32*(n0+n1+n2+n3)},noise4D:function(x,y,z,w){var n0,n1,n2,n3,n4,perm=(this.permMod12,this.perm),grad4=this.grad4,s=(x+y+z+w)*F4,i=Math.floor(x+s),j=Math.floor(y+s),k=Math.floor(z+s),l=Math.floor(w+s),t=(i+j+k+l)*G4,X0=i-t,Y0=j-t,Z0=k-t,W0=l-t,x0=x-X0,y0=y-Y0,z0=z-Z0,w0=w-W0,rankx=0,ranky=0,rankz=0,rankw=0;x0>y0?rankx++:ranky++,x0>z0?rankx++:rankz++,x0>w0?rankx++:rankw++,y0>z0?ranky++:rankz++,y0>w0?ranky++:rankw++,z0>w0?rankz++:rankw++;var i1,j1,k1,l1,i2,j2,k2,l2,i3,j3,k3,l3;i1=rankx>=3?1:0,j1=ranky>=3?1:0,k1=rankz>=3?1:0,l1=rankw>=3?1:0,i2=rankx>=2?1:0,j2=ranky>=2?1:0,k2=rankz>=2?1:0,l2=rankw>=2?1:0,i3=rankx>=1?1:0,j3=ranky>=1?1:0,k3=rankz>=1?1:0,l3=rankw>=1?1:0;var x1=x0-i1+G4,y1=y0-j1+G4,z1=z0-k1+G4,w1=w0-l1+G4,x2=x0-i2+2*G4,y2=y0-j2+2*G4,z2=z0-k2+2*G4,w2=w0-l2+2*G4,x3=x0-i3+3*G4,y3=y0-j3+3*G4,z3=z0-k3+3*G4,w3=w0-l3+3*G4,x4=x0-1+4*G4,y4=y0-1+4*G4,z4=z0-1+4*G4,w4=w0-1+4*G4,ii=255&i,jj=255&j,kk=255&k,ll=255&l,t0=.6-x0*x0-y0*y0-z0*z0-w0*w0;if(0>t0)n0=0;else{var gi0=perm[ii+perm[jj+perm[kk+perm[ll]]]]%32*4;t0*=t0,n0=t0*t0*(grad4[gi0]*x0+grad4[gi0+1]*y0+grad4[gi0+2]*z0+grad4[gi0+3]*w0)}var t1=.6-x1*x1-y1*y1-z1*z1-w1*w1;if(0>t1)n1=0;else{var gi1=perm[ii+i1+perm[jj+j1+perm[kk+k1+perm[ll+l1]]]]%32*4;t1*=t1,n1=t1*t1*(grad4[gi1]*x1+grad4[gi1+1]*y1+grad4[gi1+2]*z1+grad4[gi1+3]*w1)}var t2=.6-x2*x2-y2*y2-z2*z2-w2*w2;if(0>t2)n2=0;else{var gi2=perm[ii+i2+perm[jj+j2+perm[kk+k2+perm[ll+l2]]]]%32*4;t2*=t2,n2=t2*t2*(grad4[gi2]*x2+grad4[gi2+1]*y2+grad4[gi2+2]*z2+grad4[gi2+3]*w2)}var t3=.6-x3*x3-y3*y3-z3*z3-w3*w3;if(0>t3)n3=0;else{var gi3=perm[ii+i3+perm[jj+j3+perm[kk+k3+perm[ll+l3]]]]%32*4;t3*=t3,n3=t3*t3*(grad4[gi3]*x3+grad4[gi3+1]*y3+grad4[gi3+2]*z3+grad4[gi3+3]*w3)}var t4=.6-x4*x4-y4*y4-z4*z4-w4*w4;if(0>t4)n4=0;else{var gi4=perm[ii+1+perm[jj+1+perm[kk+1+perm[ll+1]]]]%32*4;t4*=t4,n4=t4*t4*(grad4[gi4]*x4+grad4[gi4+1]*y4+grad4[gi4+2]*z4+grad4[gi4+3]*w4)}return 27*(n0+n1+n2+n3+n4)}},"undefined"!=typeof define&&define.amd&&define(function(){return SimplexNoise}),"undefined"!=typeof exports?exports.SimplexNoise=SimplexNoise:"undefined"!=typeof window&&(window.SimplexNoise=SimplexNoise),"undefined"!=typeof module&&(module.exports=SimplexNoise)}();
        return new SimplexNoise()
    })(),
    addElement: (type, params) => {
        svg5.svg.innerHTML += `<${type} 
            ${svg5.transform ? `transform="${svg5.transform.split('|').join(' ')}"` : ''} 
            stroke="${svg5.strokeColor}"
            stroke-width="${svg5.strokeWeight}"
            stroke-linecap="${svg5.strokeCap}"
            stroke-linejoin="${svg5.strokeJoin}"
            fill="${svg5.fillColor}"
            ${params}
        />`
    }
}

const CLOSE = true
let width, height
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

const createSVG = (w, h) => {
    width = w
    height = h
    document.body.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"></svg>`
    svg5.svg = document.querySelector('svg')
    svg5.svg.addEventListener('contextmenu', e => {
        e.preventDefault()
        save()
    }, false)
}

// Styling
const clear = () => {
    svg5.svg.innerHTML = ''
}

const background = (c) => {
    svg5.svg.innerHTML += `<rect stroke="none" fill="${c}" x="0" y="0" width="${width}" height="${height}" />`
}

const fill = (c) => {
    svg5.fillColor = c
}

const noFill = () => {
    svg5.fillColor = 'none'
}

const stroke = (c) => {
    svg5.strokeColor = c
}

const strokeWeight = (n) => {
    svg5.strokeWeight = n
}

const strokeCap = (type) => {
    svg5.strokeCap = type
}

const strokeJoin = (type) => {
    svg5.strokeJoin = type
}

const noStroke = () => {
    svg5.strokeColor = 'none'
}

// Shapes
const circle = (cx, cy, diameter) => {
    svg5.addElement('circle', `cx="${cx}" cy="${cy}" r="${diameter/2}"`)
}
const ellipse = (cx, cy, w, h) => {
    svg5.addElement('ellipse', `cx="${cx}" cy="${cy}" rx="${w/2}" ry="${h/2}"`)
}
const rect = (x, y, w, h) => {
    svg5.addElement('rect', `x="${x}" y="${y}" width="${w}" height="${h}"`)
}

const polyline = (...pts) => {
    svg5.addElement('polyline', `points="${pts.join(' ')}"`)
}
const line = (x1, y1, x2, y2) => polyline(x1, y1, x2, y2)

const polygon = (...pts) => {
    svg5.addElement('polygon', `points="${pts.join(' ')}"`)
}
const triangle = (x1, y1, x2, y2, x3, y3) => polygon(x1, y1, x2, y2, x3, y3)
const quad = (x1, y1, x2, y2, x3, y3, x4, y4) => polygon(x1, y1, x2, y2, x3, y3, x4, y4)
const regularPolygon = (cx, cy, nbPoints, radius, angle = 0) => {
    const pts = new Array(nbPoints).fill(0).map((d, i) => {
        const x = cx + Math.cos(i/nbPoints * Math.PI * 2 + angle) * radius
        const y = cy + Math.sin(i/nbPoints * Math.PI * 2 + angle) * radius
        return `${x},${y}`
    })
    polygon(...pts)
}

// Vertex shapes
const beginShape = () => svg5.path = []
const vertex = (x, y) => svg5.path.push(`${svg5.path.length == 0 ? 'M' : 'L'}${x},${y}`)
const bezierVertex = (x1, y1, x2, y2, x, y) => svg5.path.push(`C ${x1} ${y1}, ${x2} ${y2}, ${x} ${y}`)
const cubicVertex = (x2, y2, x, y) => svg5.path.push(`S ${x2} ${y2}, ${x} ${y}`)
const quadraticVertex = (x1, y1, x, y) => svg5.path.push(`Q ${x1} ${y1}, ${x} ${y}`)
const endShape = (closed) => {
    svg5.addElement('path', `d="${svg5.path.join(' ')}${closed ? ' Z' : ''}"`)
}

// Math helpers
const random = (a, b) => (b || b === 0) ? a + Math.random() * (b - a) : Math.random() * a
const noise = (x, y, z) => svg5.sn.noise3D(x, y || 0, z || 0)
const lerp = (a, b, amount) => a + (b - a) * amount
const map = (n, a, b, c, d) => lerp(c, d, (n - a) / (b - a))
const constrain = (a, min, max) => a < min ? min : a > max ? max : a 

const translate = (x, y) => {
    svg5.transform += `translate(${x}, ${y}) `
}
const rotate = (angle) => {
    svg5.transform += `rotate(${angle}) `
}
const scale = (x, y) => {
    svg5.transform += `scale() `
}
const push = () => {
    svg5.transform += `|`
}
const pop = () => {
    let tmp = svg5.transform.split('|')
    tmp.pop()
    svg5.transform = tmp.join('|')
}

// Save SVG file
const save = () => {
    const svgData = p5SVG.svg.outerHTML
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    const svgUrl = URL.createObjectURL(svgBlob)
    const downloadLink = document.createElement('a')
    downloadLink.href = svgUrl
    downloadLink.download = 'export.svg'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
}