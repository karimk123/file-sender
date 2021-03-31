from flask import Flask, render_template, request, send_file, redirect, url_for, after_this_request, flash, jsonify
import os
import time
import random
app = Flask(__name__)
app.config["SECRET_KEY"] = "sdfsdfdffdfsdf"
files = {}


@app.route('/')
def home():
  return render_template("index.html")

@app.route('/upload', methods = ['POST'])
def upload_file():
    global files
    f = request.files['file']
    max = 6
    l = list(range(1, max)) 
    random.shuffle(l)
    fname = ''.join(str(e) for e in l)
    
    f.save(fname)
    
    files[fname] = f.filename 
    print(f"UPLOADED:  {f.filename}   ({fname})")

    return render_template("waiting.html", fileNameCode=fname,filename=f.filename)
   



@app.route("/download", methods=["POST"])
def download():
    global files
    
    filename = str(request.form["filename"]).replace("/", "").replace(".", "").replace("-", "")
    filename = ''.join(filter(str.isdigit, filename))
    for letter in filename:
        if  letter.isalpha():
            flash("bas yala mesh hata3raf ta3mel download lel main.py", category="error")
            break

    @after_this_request 
    def remove_file(response): 
        for letter in filename:
            if not letter.isalpha:
                return response

       
        try:
            print(f"DOWNLOADED:  {files[filename]}   ({filename})")
            os.remove(filename) 
        except :
            pass
        return response 

    try:
        time.sleep(3)        
        return send_file(filename, as_attachment=True, attachment_filename=files[filename])
    except:
        flash("Code not found, check the code from the sender and try again!", category="error")
        return redirect('/')



@app.route("/check_code=<code>", methods=["GET"])
def check(code):
    global files
    try:
        with open(str(code), "r") as f:
            pass
    except FileNotFoundError:
        return jsonify("\"does not exist\"")
    return jsonify("\"exists\"")

@app.route("/file/<filename>")
def direct_download(filename):

    global files
    
    filename = filename.replace("/", "").replace(".", "")
    filename = ''.join(filter(str.isdigit, filename))
    for letter in filename:
        if  letter.isalpha():
            flash("Code not found, check from the sender and try again!", category="error")
            break

    @after_this_request 
    def remove_file(response): 
        for letter in filename:
            if not letter.isalpha:
                return response

       
        try:
            print(f"DOWNLOADED:  {files[filename]}   ({filename})")
            os.remove(filename) 
        except :
            pass
        return response 

    try:
        time.sleep(3)        
        return send_file(filename, as_attachment=True, attachment_filename=files[filename])
    except:
        flash("Code not found, check the code from the sender and try again!", category="error")
        return redirect('/')



@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

app.run(host="0.0.0.0", port=8080, debug=True)