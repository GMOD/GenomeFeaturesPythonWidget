genomefeatures
===============================

Genome Features Widget Library

Installation
------------

For a development installation (requires npm):

    apt-get install curl git python3 python3-pip jupyter
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash  # install nvm / node
    nvm i 8
    
Install Component (we are using local in dev):

    git clone https://github.com/GMOD/GenomeFeatureComponent 
    cd GenomeFeatureComponent
    npm i
    npm run build

Install Widget:

    git clone https://github.com/nathandunn/genomefeatures.git
    cd genomefeatures
    pip3 install -e .
    jupyter nbextension install --py --symlink --sys-prefix genomefeatures
    jupyter nbextension enable --py --sys-prefix genomefeatures

Using python3 load notebook jupyter notebook:

    from genomefeatures import *
	HelloWorld()

To update only the JS:

    pip3 install -e .

And then reload the current book. 

To install on production (when ready) use pip:

    pip3 install genomefeatures
    jupyter nbextension enable --py --sys-prefix genomefeatures

