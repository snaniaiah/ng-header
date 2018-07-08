/**
******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5900-A1B
* © Copyright IBM Corp. 2018
*
* The source code for this program is not published or otherwise divested
* of its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*****************************************************************************
*/
export class HeaderProperties {
    height: string;
    backgroundColor: string;
    backgroundDiv: string;
    title: string;
    textColor: string;

    constructor(height: string, backgroundColor: string, textColor: string,
        backgroundDiv: string, title: string) {
       this.height = height;
       this.backgroundColor = backgroundColor;
       this.textColor = textColor;
       this.backgroundDiv = backgroundDiv;
       this.title = title;
    }
}
