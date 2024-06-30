# Testing the Application

## Testing Signup:
Make a POST request to `http://localhost:3000/signup` with the following JSON body:
```json
{
    "email": "testuser@example.com",
    "password": "Test@1234"
}

## Testing SignIn:
Make a POST request to `http://localhost:3000/signin` with the following JSON body:
```json
{
    "email": "testuser@example.com",
    "password": "Test@1234"
}


### Steps to Edit and Push the Changes

1. **Open the README File**:
    - Open your terminal or text editor.
    - Navigate to your project directory.
    - Open the `readme.txt` file in your text editor.

2. **Edit the File**:
    - Replace the content with the updated content shown above.

3. **Save the File**:
    - Save the `readme.txt` file after editing.

4. **Add and Commit the Changes**:
    - Open your terminal and navigate to your project directory.
    - Stage the changes:
        ```bash
        git add readme.txt
        ```
    - Commit the changes with a meaningful message:
        ```bash
        git commit -m "Updated readme.txt with testing instructions"
        ```

5. **Push the Changes to the Remote Repository**:
    - Push the changes to your remote repository:
        ```bash
        git push origin master
        ```

### Example Workflow

```bash
# Navigate to your project directory
cd path/to/your/project

# Open and edit readme.txt using your preferred text editor
nano readme.txt

# (Edit the file with the new content, then save and exit the editor)

# Stage the changes
git add readme.txt

# Commit the changes
git commit -m "Updated readme.txt with testing instructions"

# Push the changes to the remote repository
git push origin master

